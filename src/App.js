import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SpeecherClient from '@speecher/client'
import Layout from './components/layout'
import Login from './components/login'
import './App.less'

function App() {
  const [user] = useState(
    localStorage.getItem('speecher-user')
      ? JSON.parse(localStorage.getItem('speecher-user'))
      : undefined
  )

  return (
    <BrowserRouter>
      {user ? (
        <SpeecherClient config={{ user }}>
          <Layout />
        </SpeecherClient>
      ) : (
        <Routes>
          <Route path='/' exact element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App;
