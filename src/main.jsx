import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ContextProvider from './Hooks/UseContext/AppContext'

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
