import React from 'react'
import ReactDOM from 'react-dom/client'
// import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom' 
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'

// Route type (1).
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// Route type (2)
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Layout/>}>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
)
