// ================================
// WEBSITE NGHỆ AN - SCRIPT.JS
// Bài tập Tin học 12
// ================================

// Chờ DOM load xong mới chạy JavaScript
document.addEventListener('DOMContentLoaded', function () {

  // ================================
  // 0. LOAD FOOTER - Tải phần chân trang
  // ================================
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    // Nội dung footer được nhúng trực tiếp để hoạt động offline không lỗi CORS
    const footerContent = `
<div class="container">
    <div class="footer-content">
        <!-- Về chúng tôi -->
        <div class="footer-section about">
            <h3>🌾 Về Nghệ An</h3>
            <p>Website giới thiệu về văn hóa, du lịch và đặc sản tỉnh Nghệ An - Quê hương Bác Hồ. Khám phá vẻ đẹp và bản sắc độc đáo của vùng đất địa linh nhân kiệt.</p>
            <div class="socials">
                <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>

        <!-- Liên kết nhanh -->
        <div class="footer-section links">
            <h3>🔗 Liên kết nhanh</h3>
            <ul>
                <li><a href="index.html"><i class="fa-solid fa-house"></i> Trang chủ</a></li>
                <li><a href="dacsan.html"><i class="fa-solid fa-utensils"></i> Đặc sản</a></li>
                <li><a href="dulich.html"><i class="fa-solid fa-map-location-dot"></i> Du lịch</a></li>
                <li><a href="vanhoa.html"><i class="fa-solid fa-masks-theater"></i> Văn hóa</a></li>
                <li><a href="thanhvien.html"><i class="fa-solid fa-users"></i> Thành viên</a></li>
                <li><a href="lienhe.html"><i class="fa-solid fa-envelope"></i> Liên hệ</a></li>
            </ul>
        </div>

        <!-- Liên hệ -->
        <div class="footer-section contact">
            <h3>📞 Liên hệ</h3>
            <div class="contact-info-item">
                <i class="fa-solid fa-location-dot"></i>
                <p>Nghệ An</p>
            </div>
            <div class="contact-info-item">
                <i class="fa-solid fa-phone"></i>
                <p>0987 654 321</p>
            </div>
            <div class="contact-info-item">
                <i class="fa-solid fa-envelope"></i>
                <p>nghean.website@gmail.com</p>
            </div>
            <div class="contact-info-item">
                <i class="fa-solid fa-clock"></i>
                <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <div class="copyright">
                    &copy; 2026 <strong>Website Quảng Bá Đặc Sản Và Du Lịch</strong> - Bài tập Tin học 12 - Kết nối tri thức với cuộc sống
                </div>
                <div class="team-credit">
                    Được tạo bởi <a href="thanhvien.html" class="team-link">Tổ 3</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    footerElement.innerHTML = footerContent;
  }

  // ================================
  // 1. SMOOTH SCROLLING - Cuộn mượt
  // ================================
  // Khi click vào link có href bắt đầu bằng #, sẽ cuộn mượt đến vị trí đó
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Ngăn hành vi mặc định

      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Bỏ qua nếu chỉ là #

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Cuộn mượt
          block: 'start'      // Cuộn đến đầu phần tử
        });
      }
    });
  });

  // ================================
  // 2. ACTIVE MENU - Đánh dấu menu đang xem
  // ================================
  // Lấy đường dẫn trang hiện tại
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Tìm tất cả link trong menu
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    // Nếu link trùng với trang hiện tại, thêm class 'active'
    if (linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ================================
  // 3. MOBILE MENU TOGGLE - Menu responsive
  // ================================
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    // Đặt menu ở trạng thái ẩn mặc định trên mobile
    nav.classList.add('mobile-hidden');

    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('mobile-hidden');
    });
  }

  // ================================
  // 4. FORM VALIDATION - Kiểm tra form liên hệ
  // ================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Ngăn form submit mặc định

      // Lấy giá trị từ form
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Kiểm tra dữ liệu
      if (name === '') {
        alert('Vui lòng nhập họ tên!');
        return false;
      }

      if (email === '') {
        alert('Vui lòng nhập email!');
        return false;
      }

      // Kiểm tra định dạng email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Email không đúng định dạng!');
        return false;
      }

      if (message === '') {
        alert('Vui lòng nhập nội dung!');
        return false;
      }

      // Nếu tất cả đều hợp lệ
      alert('Cảm ơn bạn đã gửi thông tin!\n\nThông tin của bạn:\nHọ tên: ' + name + '\nEmail: ' + email + '\nNội dung: ' + message);

      // Reset form
      contactForm.reset();

      return false;
    });
  }

  // ================================
  // 5. SCROLL TO TOP - Hiển thị nút cuộn lên đầu
  // ================================
  let scrollTopBtn = document.getElementById('scrollTopBtn');

  // Tạo nút scroll to top nếu chưa có
  if (!scrollTopBtn && document.body) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(135deg, #2c7a3f, #ff8c42);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 24px;
      cursor: pointer;
      display: none;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 999;
      transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollTopBtn);

    // Xử lý sự kiện click
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Xử lý hiệu ứng hover
    scrollTopBtn.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });

    scrollTopBtn.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  }

  // Hiển thị/ẩn nút khi cuộn trang
  window.addEventListener('scroll', function () {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    }
  });

  // ================================
  // 6. ANIMATION ON SCROLL - Hiệu ứng khi cuộn
  // ================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Áp dụng hiệu ứng cho các card và content-item
  const animatedElements = document.querySelectorAll('.card, .content-item, .culture-box');

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });

  // ================================
  // 7. IMAGE LAZY LOADING - Tối ưu tải ảnh
  // ================================
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  console.log('Website Nghệ An đã load thành công! ✓');
});
