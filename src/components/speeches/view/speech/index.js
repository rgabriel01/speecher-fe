import React, { useState, useEffect } from 'react'
import { Button, Col, DatePicker, Divider, Form, Input, message, Row, Select } from 'antd'
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
  }, 1000)
}

const Speech = ({
  speech
}) => {
  const { attributes: { id, body, speech_date, tags }} = speech
  const [form] = useForm()
  const [responseData, updateSpeech] = useUpdateSpeech({
    successCallback
  })
  const initialValues = {
    body,
    date: moment(speech_date),
    tags: tags ? tags.split(' ') : []
  }
  const [paperBody, setPaperBody] = useState(body)
  const onFinish = (values) => {
    const {
      body,
      date,
      tags
    } = values

    const variables = {
      id,
      body,
      date: date.format('YYYY-MM-DD'),
      tags: (tags || []).join(' ')
    }
    updateSpeech({ variables })
  }
  const onDelete = () => {
    const variables = {
      id,
      deleted: true
    }

    updateSpeech({ variables })
  }

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
            <Form.Item name='tags' label='Tags'>
              <Select
                mode='tags'
                placeholder='Tags'
              />
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
                onClick={onDelete}
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
