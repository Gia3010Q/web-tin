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
    // Nội dung footer mặc định (dùng khi chạy offline không fetch được file)
    const defaultFooter = `
      <div class="container">
        <p>&copy; 2026 Website Quảng Bá Đặc Sản Và Du Lịch</p>
        <p>Được tạo bởi <a href="thanhvien.html" style="color: blue; text-decoration: underline; font-weight: bold;">Tổ 3</a></p>
        <p>Liên hệ: <a href="lienhe.html">Gửi tin nhắn</a></p>
      </div>
    `;

    // Thử tải từ file footer.html (chỉ hoạt động khi có server hoặc trình duyệt cho phép)
    fetch('footer.html')
      .then(response => {
        if (response.ok) return response.text();
        throw new Error('Không thể tải footer.html');
      })
      .then(html => {
        footerElement.innerHTML = html;
      })
      .catch(error => {
        console.warn('Sử dụng footer mặc định:', error.message);
        footerElement.innerHTML = defaultFooter;
      });
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
