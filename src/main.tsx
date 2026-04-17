import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ProjectDetailPage from './components/ProjectDetailPage.tsx'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)

      if (element) {
        element.scrollIntoView()
        return
      }
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname, location.hash])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
