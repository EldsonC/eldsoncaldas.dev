import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Global from './assets/style/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Global/>
  </React.StrictMode>
)
