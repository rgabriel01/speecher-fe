import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Home from '../home'
import Speeches from '../speeches'
import Logout from '../logout'
import { useSpeecher } from '@speecher/client'

import Sidebar from './sidebar'
import './styles.less'

const { Header, Content } = Layout

const AppLayout = () => {
  const  { user } = useSpeecher()

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>

        <Header className='main-header'>
          {`Hello ${user?.full_name}`}!
        </Header>

        <Content className='site-content -main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/speeches' element={<Speeches />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </Content>

      </Layout>
    </Layout>
  )
}

export default AppLayout
