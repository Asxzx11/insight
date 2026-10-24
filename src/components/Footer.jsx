export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">
              insight<span>labs</span>
            </h3>
            <p>Menghadirkan solusi digital yang membantu bisnis terus berkembang.</p>
          </div>

          <div>
            <h4>Layanan</h4>
            <ul className="footer-links">
              <li><a href="#services">Website Perusahaan</a></li>
              <li><a href="#services">E-Commerce</a></li>
              <li><a href="#services">Portfolio</a></li>
              <li><a href="#services">Custom Development</a></li>
            </ul>
          </div>

          <div>
            <h4>Perusahaan</h4>
            <ul className="footer-links">
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonial</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4>Hubungi Kami</h4>
            <ul className="footer-links">
              <li>Email: <a href="mailto:agungawan355@gmail.com">agungawan355@gmail.com</a></li>
              <li>Telepon: <a href="tel:081320641007">081320641007</a></li>
              <li>Pekanbaru, Riau</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Insight Labs. Semua hak dilindungi.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
