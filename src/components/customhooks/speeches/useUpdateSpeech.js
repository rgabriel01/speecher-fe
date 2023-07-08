import { useState } from 'react'
import axios from 'axios'
import env from '../../../env'

const useUpdateSpeech = ({ successCallback }) => {
  const [responseData, setResponseData] = useState({
    data: {},
    loading: false,
    error: null
  })

  const updateSpeech = ({ variables }) => {
    setResponseData({
      data: {},
      loading: true,
      error: null
    })

    return axios
      .put(
        `http://${env.BACKEND_HOST}/speeches/${variables.id}`,
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

  return [responseData, updateSpeech]
}

export default useUpdateSpeech
