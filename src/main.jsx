import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'


import router from './routes/routes'
// import AllContext from './context/AllContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AllContext> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </AllContext> */}
  </React.StrictMode>,
)