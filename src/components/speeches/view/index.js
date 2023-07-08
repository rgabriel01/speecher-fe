import React, { useEffect, useState, useMemo } from 'react'
import { Col, Row } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import Speech from './speech'
import Sidebar from './sidebar'
import { useSpeecher } from '@speecher/client'

import useGetSpeechesByAuthor from '../../customhooks/speeches/useGetSpeechesByAuthor'

const View = () => {
  const  { user } = useSpeecher()
  const [activeSpeechId, setActiveSpeechId] = useState(null)
  const [responseData, getSpeechesByAuthor] = useGetSpeechesByAuthor()

  useEffect(() => {
    getSpeechesByAuthor({ authorId: user.id })
    // eslint-disable-next-line
  }, [])

  const activeSpeech = useMemo(
    () => (responseData?.data || []).find(({ id }) => id === activeSpeechId)
  , [activeSpeechId, responseData])

  return (
    <Row>
      <Col span={6}>
        <Sidebar
          data={responseData?.data || []}
          setActiveSpeechId={setActiveSpeechId}
        />
      </Col>
      <Col span={18}>
        {activeSpeech &&
          <Speech speech={activeSpeech} key={uuidv4()}/>
        }
      </Col>
    </Row>
  )
}

export default View
