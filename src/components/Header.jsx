export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Tentang Kami', href: '#testimonials' },
    { name: 'Kontak', href: '#contact' },
  ]

  return (
    <header>
      <div className="header-content">
        <div className="header-flex">
          <a href="#home" className="logo" aria-label="Insight Labs - Beranda">
            <img className="logo-mark" src="/logo%20insight.png" alt="" />
            <span>insight<span>labs</span></span>
          </a>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Konsultasi Gratis
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  )
}
