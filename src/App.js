import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SpeecherClient from '@speecher/client'
import Layout from './components/layout'
import './App.less'

function App() {
  return (
    <BrowserRouter>
      <SpeecherClient config={{user: {id: '2'}}}>
        <Layout />
      </SpeecherClient>
    </BrowserRouter>
  )
}

export default App;
