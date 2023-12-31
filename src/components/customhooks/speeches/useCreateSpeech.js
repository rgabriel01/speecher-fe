import { useState } from 'react'
import axios from 'axios'
import env from '../../../env'

const useCreateSpeech = ({ successCallback }) => {
  const [responseData, setResponseData] = useState({
    data: {},
    loading: false,
    error: null
  })

  const createSpeech = ({ variables }) => {
    setResponseData({
      data: {},
      loading: true,
      error: null
    })

    return axios
      .post(
        `http://${env.BACKEND_HOST}/speeches/`,
        { ...variables },
        {
          headers: { 'Content-Type': 'application/json' },
          responseType: 'json'
        }
      )
        .then((response) => {
          const { data } = response?.data || {}
          if (response?.statusText === 'OK') {
            successCallback()
            setResponseData({
              data: data.attributes,
              loading: false,
              error: null
            })
          }
        })
        .catch((error) => {
          setResponseData({
            data: {},
            loading: false,
            error: error.message
          })
        })
  }

  return [responseData, createSpeech]
}

export default useCreateSpeech
