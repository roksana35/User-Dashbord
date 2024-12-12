import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <div>
      <Toaster position="top-right" /> {/* Add Toaster here */}
      <RouterProvider router={router} /> {/* Pass the router to RouterProvider */}
    </div>
  </StrictMode>,
)
