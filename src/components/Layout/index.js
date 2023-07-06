import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Home from '../home'

import Sidebar from './sidebar'
import './styles.less'

const { Header, Content } = Layout

const AppLayout = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>

        <Header className='main-header'>
          Hello, Raymond Gabriel!
        </Header>

        <Content>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Content>

      </Layout>
    </Layout>
  )
}

export default AppLayout
