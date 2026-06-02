import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/ibrahim-resume/'>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)
