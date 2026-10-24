export default function Services() {
  const services = [
    {
      title: 'Website Perusahaan',
      description: 'Tampilkan kredibilitas bisnis Anda dengan website profesional yang mencerminkan identitas merek.',
      features: ['Landing page perusahaan', 'Informasi perusahaan lengkap', 'Design responsif', 'SEO optimization'],
    },
    {
      title: 'E-Commerce',
      description: 'Bangun toko online yang lengkap dan mudah digunakan untuk menjangkau pelanggan lebih luas.',
      features: ['Katalog produk', 'Sistem pembayaran', 'Manajemen pesanan', 'Analytics penjualan'],
    },
    {
      title: 'Portfolio Online',
      description: 'Tampilkan karya dan keahlian Anda dengan portfolio digital yang menarik dan interaktif.',
      features: ['Galeri karya', 'About page', 'Contact form', 'High-resolution display'],
    },
    {
      title: 'Custom Development',
      description: 'Solusi web khusus sesuai kebutuhan bisnis Anda yang unik.',
      features: ['Sistem khusus', 'API integration', 'Custom dashboard', 'Scaling solution'],
    },
    {
      title: 'Website Landing Page',
      description: 'Halaman landas yang dirancang untuk mengkonversi pengunjung menjadi pelanggan.',
      features: ['High-conversion design', 'Clear CTAs', 'A/B testing', 'Conversion tracking'],
    },
    {
      title: 'Website Blog',
      description: 'Platform blog yang powerful untuk berbagi konten dan meningkatkan engagement.',
      features: ['Publishing platform', 'Category management', 'Comment system', 'SEO optimized'],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Layanan Kami</h2>
          <p>
            Kami menawarkan berbagai layanan web yang dirancang untuk kebutuhan bisnis Anda
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
