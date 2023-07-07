import React, { useState } from 'react'
import { Col, Row, Tabs } from 'antd'
import View from './view'
import SpeechForm from './form'
import Search from './search'

import './styles.less'

const { TabPane } = Tabs

const Speeches = () => {
  const [activeTab, setActiveTab] = useState('0')
  return (
    <Row className='speeches-container'>
      <Col span={24}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
        >

          <TabPane key='0' tab='View my Speeches'>
            <View />
          </TabPane>

          <TabPane key='1' tab='Submit a new Speech'>
            <SpeechForm />
          </TabPane>

          <TabPane key='2' tab='Search all Speeches'>
            <Search />
          </TabPane>

        </Tabs>
      </Col>
    </Row>
  )
}

export default Speeches
