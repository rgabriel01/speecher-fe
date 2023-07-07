import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import useSearchSpeeches from '../../customhooks/speeches/useSearchSpeeches'
import List from './list'
const { useForm } = Form
const { RangePicker } = DatePicker

const SearchSpeeches = () => {
  const [form] = useForm()
  const [responseData, doSearchSpeeches] = useSearchSpeeches()

  const onFinish = (values) => {
    const {
      body,
      date_range
    } = values

    const variables = {
      body,
      date_range: [
        date_range[0].format('YYYY-MM-DD'),
        date_range[1].format('YYYY-MM-DD'),
      ]
    }
    doSearchSpeeches({ variables })
  }

  const clearInput = () => {
    form.setFieldsValue({
      title: '',
      body: '',
      date_range: null
    })
  }

  return (
    <>
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
        <Form.Item name='body' label='body'>
          <Input />
        </Form.Item>

        <Form.Item name='date_range' label='Date Range'>
          <RangePicker />
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
            Search
          </Button>
        </Form.Item>
      </Form>
      <List data={responseData?.data || []} />
    </>
  )
}

export default SearchSpeeches
