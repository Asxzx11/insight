export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-gradient-1"></div>
      <div className="hero-gradient-2"></div>

      <div className="hero-container">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">
              <span aria-hidden="true"></span>
              Partner digital untuk bisnis yang terus berkembang
            </p>
            <h1 className="hero-title">
              Website profesional untuk
              <br />
              <span>bisnis yang lebih maju</span>
            </h1>
            <p className="hero-description">
              Insight Labs membantu bisnis tampil lebih terpercaya melalui solusi digital dan website yang dirancang sesuai kebutuhan Anda.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Mulai Konsultasi
              </a>
              <a href="#portfolio" className="btn-secondary">
                Lihat Portofolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
