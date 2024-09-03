
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import React from 'react'
import { BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
   

  </React.StrictMode>,
)
