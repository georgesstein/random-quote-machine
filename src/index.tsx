import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import QuoteMachine from './QuoteMachine'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QuoteMachine />
  </React.StrictMode>
)
