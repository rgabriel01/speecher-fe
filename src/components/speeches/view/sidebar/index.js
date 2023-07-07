import React from 'react'
import { Col, Menu, Row } from 'antd'
const { Item } = Menu

const Sidebar = ({
  data,
  setActiveSpeechId
}) => {
  return (
    <Row>
      <Col>
        <Menu
          mode='inline'
          onClick={
            ({ key }) => setActiveSpeechId(key)
          }
        >
          {
            (data || []).map(
              ({ id, attributes: { title }}) => (
                <Item key={id}>
                  <span>{title}</span>
                </Item>
            ))
          }
        </Menu>
      </Col>
    </Row>
  )
}

export default Sidebar
