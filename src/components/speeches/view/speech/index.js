import React, { useState, useEffect } from 'react'
import { Button, Col, DatePicker, Divider, Form, Input, message, Row } from 'antd'
import moment from 'moment'
import { requiredRule } from './rules'
import Paper from './paper'
import useUpdateSpeech from '../../../customhooks/speeches/useUpdateSpeech'
import './styles.less'

const { TextArea } = Input
const { useForm } = Form

const successCallback = () => {
  message.success('Speech updated!', 3)
  setTimeout(() => {
    window.location.reload()
  }, 3000)
}

const Speech = ({
  speech
}) => {
  const { attributes: { id, body, speech_date }} = speech
  const [form] = useForm()
  const [responseData, updateSpeech] = useUpdateSpeech({
    successCallback
  })
  const initialValues = {
    body,
    date: moment(speech_date)
  }
  const [paperBody, setPaperBody] = useState(body)
  const onFinish = (values) => {
    const {
      body,
      date
    } = values

    const variables = {
      id,
      body,
      date: date.format('YYYY-MM-DD')
    }
    updateSpeech({ variables })
    console.log('onFinish', values)
  }

  useEffect(() => {
    console.log('testo', form.getFieldValue('body'))
    setPaperBody(form.getFieldValue('body'))
  }, [form.getFieldValue('body')])

  return (
    <>
      <Row>
        <Col span={24}>
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <Form.Item name='body' label='Body' rules={requiredRule}>
              <TextArea onChange={(e) => setPaperBody(e.target.value)}/>
            </Form.Item>
            <Form.Item name='date' label='Date' rules={requiredRule}>
              <DatePicker />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 8,
                offset: 1
              }}
            >
              <Button
                type='ghost'
                className='-mr-16'
              >
                Delete
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                className='-mr-16'
              >
                Update
              </Button>
              <Button
                type='primary'
              >
                Share
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Divider />
      <Row justify='center'>
        <Col>
          <Paper body={paperBody}/>
        </Col>
      </Row>
    </>
  )
}

export default Speech
