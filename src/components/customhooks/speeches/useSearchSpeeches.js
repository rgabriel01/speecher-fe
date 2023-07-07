import { useState } from 'react'
import axios from 'axios'

const useSearchSpeeches = () => {
  const [responseData, setResponseData] = useState({
    data: [],
    loading: false,
    error: null
  })

  const searchSpeeches = ({ variables }) => {
    setResponseData({
      data: [],
      loading: true,
      error: null
    })

    return axios
      .get(
        `http://localhost:3000/speeches/search`,
        { params: { ...variables } },
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

  return [responseData, searchSpeeches]
}

export default useSearchSpeeches
