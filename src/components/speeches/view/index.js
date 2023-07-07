import React, { useEffect, useState, useMemo } from 'react'
import { Col, Row } from 'antd'
import Speech from './speech'
import Sidebar from './sidebar'

import useGetSpeechesByAuthor from '../../customhooks/speeches/useGetSpeechesByAuthor'

const View = () => {
  const [activeSpeechId, setActiveSpeechId] = useState(null)
  const [responseData, getSpeechesByAuthor] = useGetSpeechesByAuthor()

  useEffect(() => {
    getSpeechesByAuthor({ authorId: 1 })
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
          <Speech speech={activeSpeech}/>
        }
      </Col>

    </Row>
  )
}

export default View
