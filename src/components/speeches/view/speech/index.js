import React from 'react'
import { Col, Divider, Input, Row } from 'antd'
import Paper from './paper'

const Speech = ({
  speech
}) => {
  const { attributes: { body, author, speech_date }} = speech

  const { TextArea } = Input

  return (
    <>
      <Row>
        <Col span={24}>
          <TextArea rows={3} value={body}/>
        </Col>
      </Row>
      <Divider />
      <Row justify='space-between'>
        <Col>
          <Row>
            <Col>
              Author:
            </Col>
            <Col>
              {author?.full_name || ''}
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              Keywords:
            </Col>
            <Col>
              Keywords here
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              Speech date:
            </Col>
            <Col>
              {speech_date}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Paper body={body}/>
        </Col>
      </Row>
    </>
  )
}

export default Speech
