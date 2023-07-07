import { useState } from 'react'
import axios from 'axios'
import env from '../../../env'

const useGetUsers = () => {
  const [responseData, setResponseData] = useState({
    data: [],
    loading: false,
    error: null
  })

  const getUsers = () => {
    setResponseData({
      data: [],
      loading: true,
      error: null
    })

    return axios
      .get(
        `http://${env.BACKEND_HOST}/users`,
        {},
        {
          headers: { 'Content-Type': 'application/json' },
          responseType: 'json'
        }
      )
        .then((response) => {
          const { data } = response?.data || {}
          setResponseData({
            data,
            loading: false,
            error: null
          })
        })
        .catch((error) => {
          setResponseData({
            data: [],
            loading: false,
            error: error.message
          })
        })
  }

  return [responseData, getUsers]
}

export default useGetUsers
