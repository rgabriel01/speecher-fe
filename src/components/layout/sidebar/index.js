import React from 'react'
import { Col, Layout, Menu, Row, Typography } from 'antd'
import { Megaphone } from '../../../components/assets'

import './styles.less'

const { Sider } = Layout
const { Item } = Menu
const { Title } = Typography

const Sidebar = () => {
  return (
    <Sider
      data-testid='main-sidebar'
      trigger={null}
      collapsible
      width={240}
      collapsedWidth={66}
    >
      <div className='brand'>
        <Row align='middle'>
          <Col span={4}>
            <Megaphone />
          </Col>
          <Col>
            <Title level={3}>
              Speecher
            </Title>
          </Col>
        </Row>

        <Menu
          mode='inline'
          defaultSelectedKeys={['home']}
          className='sidebar-nav'
        >
          <Item key='home'>
            <span>Home</span>
          </Item>
          <Item key='speeches'>
            <span>Speeches</span>
          </Item>
        </Menu>

      </div>
    </Sider>
  )
}

export default Sidebar
