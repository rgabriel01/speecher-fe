import { useState } from 'react'
import axios from 'axios'

const useGetSpeechesByAuthor = () => {
  const [responseData, setResponseData] = useState({
    data: [],
    loading: false,
    error: null
  })

  const getSpeechesByAuthor = ({ authorId }) => {
    setResponseData({
      data: [],
      loading: true,
      error: null
    })

    return axios
      .get(
        `http://localhost:3000/speeches/fetch_by_author/${authorId}`,
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

  return [responseData, getSpeechesByAuthor]
}

export default useGetSpeechesByAuthor
