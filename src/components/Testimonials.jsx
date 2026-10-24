export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="website-showcase">
          <div className="showcase-stage" aria-label="Contoh website yang dikerjakan Insight Labs">
            <div className="showcase-screen showcase-screen-back">
              <img src="/bpr.png" alt="Tampilan website BPR Tilatang Kamang" loading="lazy" />
            </div>
            <div className="showcase-screen showcase-screen-middle">
              <img src="/ascinema.png" alt="Tampilan website ASCinema" loading="lazy" />
            </div>
            <div className="showcase-screen showcase-screen-front">
              <img src="/a.png" alt="Tampilan dashboard aplikasi web" loading="lazy" />
            </div>
          </div>

          <div className="showcase-copy">
            <h2>Bisnis Anda Butuh Website Profesional</h2>
            <p>
              Website yang profesional adalah investasi penting bagi perkembangan
              bisnis Anda. Mengapa? Karena di dunia digital yang sangat kompetitif,
              website bukan hanya menjadi tempat informasi, tapi juga etalase virtual
              yang mewakili brand Anda. Website yang profesional mampu memberi kesan
              pertama yang kuat, mengarahkan pengunjung untuk lebih memahami produk
              atau layanan Anda, dan akhirnya membuat mereka percaya pada bisnis Anda.
            </p>
            <a href="#contact" className="showcase-cta">
              Bikin website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
