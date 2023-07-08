import React, { useContext, createContext } from 'react'

export const SpeecherContext = createContext({
  user: {
    id: '',
    email: '',
    full_name: ''
  }
})

const SpeecherClient = (props) => {
  const {
    config: { user }
  } = props

  return (
    <SpeecherContext.Provider value={{ user }}>
      {props.children}
    </SpeecherContext.Provider>
  )
}

const useSpeecher = () => {
  return useContext(SpeecherContext)
}

export { useSpeecher }
export default SpeecherClient
