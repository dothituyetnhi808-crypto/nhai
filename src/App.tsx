import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo" onClick={(event) => { event.preventDefault(); scrollToSection('home') }}>NHÀI ORYZA</a>
        <ul className="nav-links">
          <li><a href="#home" onClick={(event) => { event.preventDefault(); scrollToSection('home') }}>Trang chủ</a></li>
          <li><a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection('about') }}>Giới thiệu</a></li>
          <li><a href="#products" onClick={(event) => { event.preventDefault(); scrollToSection('products') }}>Sản phẩm</a></li>
          <li><a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection('contact') }}>Liên hệ</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Mỹ phẩm thiên nhiên</span>
          <h1 className="hero-title">NHÀI<br/>ORYZA</h1>
          <p className="hero-description">
            Tinh hoa Việt - Dịu làn da<br/>
            Kết hợp tinh chất hoa nhài và gạo Việt Nam<br/>
            Mang đến giải pháp chăm sóc da an toàn, lành tính
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('products')}>
              Khám phá sản phẩm
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('about')}>
              Về chúng tôi
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-header">
          <span className="section-label">Giới thiệu</span>
          <h2 className="section-title">
            Về Thương Hiệu NHÀI ORYZA
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>NHÀI ORYZA</strong> là thương hiệu mỹ phẩm thiên nhiên, tập trung vào dòng sản phẩm chăm sóc da dịu nhẹ, an toàn, đặc biệt phù hợp với làn da nhạy cảm của người Việt.
            </p>
            <p>
              Thương hiệu lấy cảm hứng từ sự kết hợp hoa nhài - biểu tượng của sự tinh khiết, thanh tao và gạo (Oryza) - nguyên liệu truyền thống giàu vitamin và khoáng chất giúp dưỡng sáng, nuôi dưỡng làn da khỏe mạnh.
            </p>
          </div>

          <div className="vision-mission">
            <div className="vm-item">
              <h3>Tầm nhìn</h3>
              <p>Trở thành thương hiệu mỹ phẩm thiên nhiên mang bản sắc Việt, được tin dùng rộng rãi trong nước và từng bước vươn ra thị trường quốc tế.</p>
            </div>
            <div className="vm-item">
              <h3>Sứ mệnh</h3>
              <p>Mang đến các sản phẩm chăm sóc da an toàn, lành tính, hiệu quả, phù hợp với làn da người Việt. Khai thác và nâng tầm giá trị nguyên liệu thiên nhiên Việt Nam.</p>
            </div>
          </div>
        </div>

        <div className="values">
          <h3>Giá trị cốt lõi</h3>
          <div className="values-grid">
            <div className="value-item">An toàn</div>
            <div className="value-item">Tự nhiên</div>
            <div className="value-item">Hiệu quả</div>
            <div className="value-item">Bản sắc Việt</div>
            <div className="value-item">Bền vững</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="products-header">
          <span className="section-label">Sản phẩm</span>
          <h2 className="section-title" style={{ color: 'var(--secondary)' }}>
            Dòng Sản Phẩm Chủ Lực
          </h2>
        </div>

        <div className="products-content">
          <div className="product-item">
            <h3>Sữa Rửa Mặt</h3>
            <p>Gentle Cleanser - Làm sạch dịu nhẹ, không gây kích ứng</p>
          </div>
          <div className="product-item">
            <h3>Nước Hoa Hồng</h3>
            <p>Toner - Cân bằng da, se khít lỗ chân lông</p>
          </div>
          <div className="product-item">
            <h3>Serum</h3>
            <p>Glow Serum - Chiết xuất gạo & hoa nhài, làm sáng da</p>
          </div>
          <div className="product-item">
            <h3>Kem Dưỡng</h3>
            <p>Moisture Cream - Cấp ẩm sâu, nuôi dưỡng da mềm mịn</p>
          </div>
          <div className="product-item">
            <h3>Nước Micellar</h3>
            <p>Cleansing Water - Tẩy trang nhẹ nhàng</p>
          </div>
          <div className="product-item">
            <h3>Mặt Nạ Ngủ</h3>
            <p> sleeping mask - Phục hồi da qua đêm</p>
          </div>
        </div>

        <div className="routine">
          <h3>Quy Trình Chăm Sóc Da Cơ Bản</h3>
          <div className="routine-steps">
            <div className="step">1. Sữa rửa mặt</div>
            <div className="step">2. Toner</div>
            <div className="step">3. Serum</div>
            <div className="step">4. Kem dưỡng</div>
            <div className="step">5. Mặt nạ ngủ</div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Tại Sao Chọn NHÀI ORYZA?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Kết Hợp Hoàn Hảo</h4>
            <p>Tinh chất gạo Việt giàu dưỡng chất kết hợp hoa nhài dịu nhẹ</p>
          </div>
          <div className="why-item">
            <h4>Thiên Nhiên</h4>
            <p>Thành phần tự nhiên, an toàn cho làn da nhạy cảm</p>
          </div>
          <div className="why-item">
            <h4>Bản Sắc Việt</h4>
            <p>Mang đậm hình ảnh tinh tế đậm chất Á Đông</p>
          </div>
          <div className="why-item">
            <h4>Hiệu Quả</h4>
            <p>Được nghiên cứu khoa học, đảm bảo chất lượng</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-header">
          <span className="section-label">Liên hệ</span>
          <h2 className="section-title">Kết Nối Với Chúng Tôi</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p>NHÀI ORYZA luôn lắng nghe và sẵn sàng hỗ trợ bạn. Để được tư vấn về sản phẩm và chăm sóc da phù hợp.</p>
            
            <div className="contact-links">
              <a href="#" className="contact-link">
                <span>📍</span>
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </a>
              <a href="#" className="contact-link">
                <span>📱</span>
                <span>Liên hệ qua mạng xã hội</span>
              </a>
            </div>

            <div className="social-section">
              <h4>Kênh Mua Sắm</h4>
              <div className="shop-links">
                <span>Shopee</span>
                <span>TikTok Shop</span>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">NHÀI ORYZA</div>
        <div className="footer-slogan">Tinh hoa Việt - Dịu làn da</div>
        <p className="footer-text">© 2026 NHÀI ORYZA. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
