import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRouter from './ReactRouter.js'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ReactRouter />
   </React.StrictMode>
)
