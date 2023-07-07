import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Home from '../home'
import Speeches from '../speeches'

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

        <Content className='site-content -main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/speeches' element={<Speeches />} />
          </Routes>
        </Content>

      </Layout>
    </Layout>
  )
}

export default AppLayout
