import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import 'remixicon/fonts/remixicon.css'
import PreLoader from './components/PreLoader.jsx'
import 'animate.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className='container mx-auto px-4'>
      <NavBar />
      <App />
    </div>
  </StrictMode>,
)
