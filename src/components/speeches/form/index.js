import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import useCreateSpeech from '../../customhooks/speeches/useCreateSpeech'
import './styles.less'

const { useForm } = Form
const { TextArea } = Input

const SpeechForm = () => {
  const [form] = useForm()
  const [responseData, createSpeech] = useCreateSpeech()

  const onFinish = (values) => {
    const {
      title,
      body,
      date
    } = values
    const variables = {
      title,
      body,
      user_id: 2,
      date: date.format('YYYY-MM-DD')
    }

    createSpeech({ variables })
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
      <Form.Item name='title' label='Title'>
        <Input />
      </Form.Item>
      <Form.Item name='body' label='Body'>
        <TextArea />
      </Form.Item>
      <Form.Item name='date' label='Date'>
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
