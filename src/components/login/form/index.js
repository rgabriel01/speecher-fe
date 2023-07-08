import React, { useEffect } from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import useUserAuthenticate from '../../customhooks/users/useUserAuthenticate'

import './styles.less'
const LoginForm = () => {
  const [responseData, userAuthenticate] = useUserAuthenticate()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    const { email } = values
    const variables = {
      email
    }

    form
      .validateFields()
      .then(() => {
        userAuthenticate({ variables })
      })
  }

  useEffect(() => {
    if (responseData?.data?.attributes) {
      localStorage
        .setItem(
          'speecher-user',
          JSON.stringify(responseData?.data?.attributes)
        )
      window.location.href = '/speeches'
    }
  }, [responseData])

  return (
    <Row justify='center' align='middle'>
      <Col span={24}>
        <div className='login-container'>
          <Form
            className='login-form'
            form={form}
            onFinish={onFinish}
          >
            <div className='login-text'>
              <h1>Sign in to Speecher</h1>
            </div>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please input your username.' }]}
            >
              <Input
                placeholder='Email'
                size='large'
                autoFocus
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                size='large'
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginForm
