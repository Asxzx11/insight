import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  useEffect(() => {
    if (!isPopupOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsPopupOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPopupOpen])

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {isPopupOpen && (
        <div
          className="image-popup"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsPopupOpen(false)
          }}
        >
          <div
            className="image-popup-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Informasi dari Insight Labs"
          >
            <button
              className="image-popup-close"
              type="button"
              aria-label="Tutup pop-up"
              onClick={() => setIsPopupOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <img src="/2.png" alt="Informasi Insight Labs" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
