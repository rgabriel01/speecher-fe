import React, { useEffect } from 'react'
import { Button, DatePicker, Form, Input, Select } from 'antd'
import useSearchSpeeches from '../../customhooks/speeches/useSearchSpeeches'
import useGetUsers from  '../../customhooks/users/useGetUsers'
import List from './list'

const { useForm } = Form
const { RangePicker } = DatePicker

const SearchSpeeches = () => {
  const [form] = useForm()
  const [responseData, doSearchSpeeches] = useSearchSpeeches()
  const [usersResponseData, getUsers] = useGetUsers()
  const authorOptions = (usersResponseData?.data || [])
    .map(({ attributes: { id, full_name }}) => ({ value: id, label: full_name }))

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line
  }, [])

  const onFinish = (values) => {
    const {
      author_id,
      body,
      date_range,
      tags
    } = values
    const cleanDateRange = date_range != null
      ? [
          date_range[0].format('YYYY-MM-DD'),
          date_range[1].format('YYYY-MM-DD'),
        ]
      : []
    const variables = {
      author_id,
      body,
      date_range: cleanDateRange,
      tags
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
        <Form.Item name='author_id' label='Author'>
          <Select
            options={
              [
                {value: null, label: 'All Authors'},
                ...authorOptions
              ]
            }
          />
        </Form.Item>

        <Form.Item name='body' label='body'>
          <Input />
        </Form.Item>

        <Form.Item name='date_range' label='Date Range'>
          <RangePicker />
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
