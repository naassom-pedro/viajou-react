import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Contato } from './pages/Contato'
import { Destinos } from './pages/Destinos'
import { Promocoes } from './pages/Promocoes'

ReactDOM.render(
  <React.StrictMode>
    <Contato />
  </React.StrictMode>,
  document.getElementById('root')
)
