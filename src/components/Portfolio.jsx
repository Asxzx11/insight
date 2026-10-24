export default function Portfolio() {
  const projects = [
    { title: 'Insight Logbook', category: 'Sistem Informasi', image: '/login.png' },
    { title: 'ASCinema', category: 'Website Hiburan', image: '/ascinema.png' },
    { title: 'BPR Tilatang Kamang', category: 'Website Perbankan', image: '/bpr.png' },
    { title: 'Dashboard Admin', category: 'Aplikasi Web', image: '/a.png' },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Portofolio pilihan</h2>
          <p>Beberapa solusi digital yang telah kami kerjakan</p>
        </div>

        <div className="portfolio-marquee">
          <div className="portfolio-track">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="portfolio-group"
                aria-hidden={group === 1 ? 'true' : undefined}
              >
                {projects.map((project) => (
                  <article className="portfolio-item" key={`${group}-${project.title}`}>
                    <img src={project.image} alt={group === 0 ? project.title : ''} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-category">{project.category}</div>
                      <h3 className="portfolio-title">{project.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
