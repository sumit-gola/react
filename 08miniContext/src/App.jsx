import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'


function App() {
 

  return (
    <UserContextProvider>
        <h1> Hello world</h1>
        <Profile/>
        <Login/>
    </UserContextProvider>
  )
}

export default App
