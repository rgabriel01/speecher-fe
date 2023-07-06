import React from 'react'
import { Layout } from 'antd'

import Sidebar from './sidebar'
import './styles.less'

const { Header } = Layout

const AppLayout = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Header className='main-header'>
          Hello, Raymond Gabriel!
        </Header>
      </Layout>
    </Layout>
  )
}

export default AppLayout
