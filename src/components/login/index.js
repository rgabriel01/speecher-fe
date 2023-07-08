import React from 'react'
import { Layout } from 'antd'
import LoginForm from './form'
import './styles.less'

const { Content } = Layout

const Login = () =>  {
  return (
    <Layout>
      <Content className='login-content'>
        <LoginForm />
      </Content>
    </Layout>
  )
}

export default Login
