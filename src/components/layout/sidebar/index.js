import React from 'react'
import { Col, Layout, Menu, Row, Typography } from 'antd'
import { Megaphone } from '../../../components/assets'
import { Link } from 'react-router-dom'

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
            <Link to='/' className='sidebar-link'>
              <span>Home</span>
            </Link>
          </Item>
          <Item key='speeches'>
            <Link to='/speeches' className='sidebar-link'>
              <span>Speeches</span>
            </Link>
          </Item>
        </Menu>

      </div>
    </Sider>
  )
}

export default Sidebar
