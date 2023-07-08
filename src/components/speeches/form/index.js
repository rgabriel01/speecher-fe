import React from 'react'
import { Button, DatePicker, Form, Input, message } from 'antd'
import useCreateSpeech from '../../customhooks/speeches/useCreateSpeech'
import { useSpeecher } from '@speecher/client'
import { requiredRule } from './rules'
import './styles.less'

const { useForm } = Form
const { TextArea } = Input

const successCallback = () => {
  message.success('Speech created!', 3)
  setTimeout(() => {
    window.location.reload()
  }, 1000)
}

const SpeechForm = () => {
  const { user } = useSpeecher()
  const [form] = useForm()
  const [responseData, createSpeech] = useCreateSpeech({
    successCallback
  })
  console.log(responseData)
  const onFinish = (values) => {
    const {
      title,
      body,
      date
    } = values
    const variables = {
      title,
      body,
      user_id: user.id,
      date: date.format('YYYY-MM-DD')
    }

    form
      .validateFields()
      .then(() => {
        createSpeech({ variables })
      })
  }

  const clearInput = () => {
    form.setFieldsValue({
      title: '',
      body: '',
      date: ''
    })
  }

  return (
    <Form
      form={form}
      labelCol={{
        span: 4
      }}
      wrapperCol={{
        span: 8
      }}
      onFinish={onFinish}
    >
      <Form.Item name='title' label='Title' rules={requiredRule}>
        <Input />
      </Form.Item>
      <Form.Item name='body' label='Body' rules={requiredRule}>
        <TextArea />
      </Form.Item>
      <Form.Item name='date' label='Date' rules={requiredRule}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 8,
          offset: 4
        }}
      >
        <Button
          type='ghost'
          className='discard'
          onClick={clearInput}
        >
          Discard
        </Button>
        <Button
          type='primary'
          htmlType='submit'
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SpeechForm
