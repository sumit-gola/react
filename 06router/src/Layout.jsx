import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import {Outlet} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/Users/User'
import Github from './components/Github/Github'




const layout = () => {
  return (
    <div>
        <Header/>
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />    
          <Route path="user/:userid" element={<User />} />    
          <Route 
          
          path="github" element={<Github />} />    
        </Routes>
        <Footer/>
        
    </div>
  )
}

export default layout