import React from 'react'
import { Col, Row } from 'antd'
import Speech from './speech'
import Sidebar from './sidebar'

const View = () => {
  return (
    <Row>

      <Col span={10}>
        <Sidebar />
      </Col>

      <Col span={14}>
        <Speech />
      </Col>

    </Row>
  )
}

export default View
