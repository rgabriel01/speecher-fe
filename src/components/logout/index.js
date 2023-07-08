import React from 'react'

const Logout = () => {
  localStorage.removeItem('speecher-user')
  window.location.href = '/'
  return <></>
}

export default Logout
