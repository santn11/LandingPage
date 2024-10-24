import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
