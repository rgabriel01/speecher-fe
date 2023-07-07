import React from 'react'
import { Col, Menu, Row } from 'antd'

const { Item } = Menu

const Sidebar = () => {
  return (
    <Row>
      <Col>
        <Menu
          mode='inline'
        >
          <Item key='id-1'>
            <span>Some Speech title</span>
          </Item>
          <Item key='id-2'>
            <span>Some Speech title</span>
          </Item>
          <Item key='id-3'>
            <span>Some Speech title</span>
          </Item>
        </Menu>
      </Col>
    </Row>
  )
}

export default Sidebar
