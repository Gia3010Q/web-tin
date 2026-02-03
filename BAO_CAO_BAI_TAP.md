# BÁO CÁO BÀI TẬP TIN HỌC 12
## ĐỀ TÀI: WEBSITE GIỚI THIỆU TỈNH NGHỆ AN

**Môn học:** Tin học 12 - Bài 18: Thiết kế Website  
**Chủ đề:** Kết nối tri thức với cuộc sống  
**Năm học:** 2025-2026

---

## PHẦN 1: MỤC TIÊU ĐỀ TÀI

### 1.1. Mục tiêu chung

Xây dựng một website giới thiệu về tỉnh Nghệ An nhằm:
- Quảng bá các đặc sản nổi tiếng của Nghệ An
- Giới thiệu các địa điểm du lịch hấp dẫn
- Bảo tồn và phát huy giá trị văn hóa truyền thống
- Góp phần phát triển du lịch và kinh tế địa phương

### 1.2. Mục tiêu học tập

- Áp dụng kiến thức HTML, CSS, JavaScript đã học vào thực tế
- Hiểu và vận dụng được cấu trúc cơ bản của một website
- Rèn luyện kỹ năng thiết kế giao diện đẹp mắt, thân thiện
- Phát triển tư duy logic trong lập trình web
- Kết nối kiến thức tin học với cuộc sống thực tế

---

## PHẦN 2: CẤU TRÚC WEBSITE

### 2.1. Sơ đồ cấu trúc

```
Website Nghệ An
│
├── Trang chủ (index.html)
│   ├── Giới thiệu chung
│   ├── Hình ảnh tiêu biểu
│   └── Liên kết nhanh
│
├── Đặc sản (specialties.html)
│   ├── Cam Vinh
│   ├── Cháo lươn Vinh
│   ├── Nhút Thanh Chương
│   ├── Tương Nam Đàn
│   └── Bánh mướt Diễn Châu
│
├── Du lịch (tourism.html)
│   ├── Biển Cửa Lò
│   ├── Kim Liên - Quê Bác
│   ├── Vườn quốc gia Pù Mát
│   └── Thác Khe Kèm
│
├── Văn hóa (culture.html)
│   ├── Dân ca Ví - Giặm
│   ├── Truyền thống hiếu học
│   └── Con người xứ Nghệ
│
└── Liên hệ (contact.html)
    └── Form liên hệ
```

### 2.2. Thư mục dự án

```
nghe-an-website/
├── index.html              # Trang chủ
├── specialties.html        # Trang đặc sản
├── tourism.html            # Trang du lịch
├── culture.html            # Trang văn hóa
├── contact.html            # Trang liên hệ
├── style.css               # File CSS định dạng
├── script.js               # File JavaScript
└── images/                 # Thư mục hình ảnh
    ├── home/               # Ảnh trang chủ
    ├── specialties/        # Ảnh đặc sản
    ├── tourism/            # Ảnh du lịch
    └── culture/            # Ảnh văn hóa
```

---

## PHẦN 3: CÔNG NGHỆ SỬ DỤNG

### 3.1. HTML5 (HyperText Markup Language)

**Vai trò:** Xây dựng cấu trúc và nội dung của website

**Các thẻ HTML đã sử dụng:**

| Thẻ HTML | Công dụng | Ví dụ |
|----------|-----------|-------|
| `<header>` | Phần đầu trang | Logo, menu |
| `<nav>` | Menu điều hướng | Trang chủ, Đặc sản, Du lịch... |
| `<section>` | Phân chia các phần nội dung | Intro, Gallery, Cards |
| `<div>` | Container chứa nội dung | Container, card |
| `<img>` | Hiển thị hình ảnh | Ảnh đặc sản, du lịch |
| `<form>` | Form liên hệ | Họ tên, email, nội dung |
| `<footer>` | Chân trang | Thông tin bản quyền |

**Ví dụ code HTML:**

```html
<section class="cards">
  <div class="container">
    <div class="cards-grid">
      <div class="card">
        <img src="images/specialties/cam_vinh.png" alt="Cam Vinh">
        <div class="card-content">
          <h4>🍊 Cam Vinh</h4>
          <p>Cam Vinh là loại cam đặc sản nổi tiếng...</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3.2. CSS3 (Cascading Style Sheets)

**Vai trò:** Định dạng màu sắc, bố cục, và giao diện của website

**Các kỹ thuật CSS đã áp dụng:**

1. **CSS Variables** - Định nghĩa màu sắc thống nhất:
```css
:root {
  --primary-color: #2c7a3f;      /* Màu xanh lá */
  --secondary-color: #ff8c42;    /* Màu cam */
  --text-color: #333;            /* Màu chữ */
}
```

2. **Flexbox** - Sắp xếp phần tử linh hoạt:
```css
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

3. **CSS Grid** - Bố cục dạng lưới:
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

4. **Responsive Design** - Thích ứng với nhiều kích thước màn hình:
```css
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

5. **Animations & Transitions** - Hiệu ứng chuyển động:
```css
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}
```

### 3.3. JavaScript (ES6+)

**Vai trò:** Tạo tương tác và xử lý sự kiện

**Các chức năng JavaScript đã triển khai:**

1. **Smooth Scrolling** - Cuộn mượt khi click menu:
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
```

2. **Form Validation** - Kiểm tra dữ liệu form:
```javascript
if (name === '') {
  alert('Vui lòng nhập họ tên!');
  return false;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert('Email không đúng định dạng!');
  return false;
}
```

3. **Active Menu** - Đánh dấu trang đang xem:
```javascript
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
```

4. **Scroll to Top Button** - Nút cuộn lên đầu trang:
```javascript
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
```

---

## PHẦN 4: TÍNH NĂNG NỔI BẬT

### 4.1. Giao diện đẹp mắt, hiện đại

- Sử dụng màu sắc hài hòa (xanh lá, cam, nâu)
- Gradient backgrounds tạo cảm giác sống động
- Box shadows tạo chiều sâu
- Border radius bo tròn góc, mềm mại

### 4.2. Responsive Design

- Tự động điều chỉnh theo kích thước màn hình
- Hỗ trợ desktop, tablet, mobile
- Menu hamburger trên mobile
- Layout linh hoạt

### 4.3. Tương tác người dùng

- Hover effects khi di chuột
- Smooth scrolling mượt mà
- Form validation thông minh
- Scroll to top tiện lợi
- Animation on scroll

### 4.4. SEO Friendly

- Meta tags đầy đủ
- Semantic HTML
- Alt text cho hình ảnh
- Cấu trúc rõ ràng

---

## PHẦN 5: NỘI DUNG CHI TIẾT

### 5.1. Trang chủ (index.html)

**Mô tả:** Trang chủ là nơi giới thiệu tổng quan về Nghệ An và cung cấp điều hướng đến các trang khác.

**Các phần chính:**
1. Hero banner với slogan "Quê hương anh hùng - Đất võ trời văn"
2. Giới thiệu ngắn về Nghệ An và mục đích website
3. Gallery 3 hình ảnh tiêu biểu: Cửa Lò, Kim Liên, Pù Mát
4. Quick links dẫn đến các trang con

### 5.2. Trang Đặc sản (specialties.html)

**Mô tả:** Giới thiệu 5 đặc sản nổi tiếng của Nghệ An.

**Đặc sản được giới thiệu:**
- 🍊 Cam Vinh
- 🍲 Cháo lươn Vinh
- 🎋 Nhút Thanh Chương
- 🥫 Tương Nam Đàn
- 🥟 Bánh mướt Diễn Châu

**Bố cục:** Card layout với hình ảnh và mô tả ngắn gọn.

### 5.3. Trang Du lịch (tourism.html)

**Mô tả:** Giới thiệu 4 địa điểm du lịch nổi bật của Nghệ An.

**Địa điểm:**
- 🏖️ Biển Cửa Lò
- 🏡 Kim Liên - Quê hương Bác Hồ
- 🌲 Vườn quốc gia Pù Mát
- 💦 Thác Khe Kèm

**Bố cục:** Alternating layout với hình ảnh và mô tả chi tiết.

### 5.4. Trang Văn hóa (culture.html)

**Mô tả:** Giới thiệu 3 đặc trưng văn hóa của Nghệ An.

**Nội dung:**
- 🎵 Dân ca Ví - Giặm Nghệ Tĩnh (Di sản UNESCO)
- 📚 Truyền thống hiếu học
- 👥 Con người xứ Nghệ cần cù, nghĩa tình

**Bố cục:** Text-heavy với quote boxes và hình ảnh minh họa.

### 5.5. Trang Liên hệ (contact.html)

**Mô tả:** Form liên hệ để người dùng gửi tin nhắn, góp ý.

**Form fields:**
- Họ và tên (required)
- Email (required, validated)
- Nội dung góp ý (required)

**Validation:** JavaScript kiểm tra dữ liệu trước khi submit.

---

## PHẦN 6: HƯỚNG DẪN SỬ DỤNG

### 6.1. Cách mở website

**Bước 1:** Mở File Explorer  
**Bước 2:** Dẫn đến thư mục `d:\Ai\tin v2\nghe-an-website\`  
**Bước 3:** Double-click vào file `index.html`  
**Bước 4:** Website sẽ tự động mở trên trình duyệt

### 6.2. Cách sử dụng

- **Điều hướng:** Click vào menu để chuyển trang
- **Xem nội dung:** Cuộn trang lên xuống
- **Tương tác:** Di chuột qua các thẻ để thấy hiệu ứng
- **Liên hệ:** Điền form và nhấn Gửi

### 6.3. Yêu cầu hệ thống

- **Trình duyệt:** Chrome, Firefox, Edge, Safari (bất kỳ)
- **Hệ điều hành:** Windows, macOS, Linux
- **Kết nối internet:** Không cần (chạy offline)

---

## PHẦN 7: KẾT QUẢ ĐẠT ĐƯỢC

### 7.1. Về mặt kỹ thuật

✅ Website hoạt động tốt trên mọi trình duyệt  
✅ Responsive design hoàn chỉnh  
✅ Code sạch, có chú thích đầy đủ  
✅ Không có lỗi HTML, CSS, JavaScript  
✅ Tốc độ tải trang nhanh

### 7.2. Về mặt nội dung

✅ Nội dung chính xác, có giá trị  
✅ Hình ảnh đẹp, chất lượng cao  
✅ Thông tin đầy đủ về Nghệ An  
✅ Dễ hiểu, dễ sử dụng

### 7.3. Về mặt giáo dục

✅ Áp dụng được kiến thức Tin học 12  
✅ Kết nối với cuộc sống thực tế  
✅ Phát huy tinh thần yêu quê hương  
✅ Rèn luyện tư duy sáng tạo

---

## PHẦN 8: KHẢO SÁT VÀ ĐÁNH GIÁ

### 8.1. Ưu điểm

👍 **Giao diện đẹp mắt:** Màu sắc hài hòa, bố cục logic  
👍 **Dễ sử dụng:** Navigation rõ ràng, trực quan  
👍 **Responsive:** Hoạt động tốt trên mọi thiết bị  
👍 **Nội dung phong phú:** Nhiều thông tin về Nghệ An  
👍 **Code chất lượng:** Sạch, có chú thích, dễ bảo trì

### 8.2. Hạn chế

⚠️ **Nội dung tĩnh:** Chưa kết nối với database  
⚠️ **Form giả lập:** Chưa gửi email thật  
⚠️ **Ngôn ngữ đơn:** Chỉ có tiếng Việt  

### 8.3. Hướng phát triển

🚀 **Kết nối database:** Quản lý nội dung động  
🚀 **Thêm tính năng:** Tìm kiếm, bình luận, đánh giá  
🚀 **Đa ngôn ngữ:** Thêm tiếng Anh  
🚀 **Admin panel:** Quản trị nội dung  
🚀 **SEO nâng cao:** Tối ưu Google  

---

## PHẦN 9: KẾT LUẬN

### 9.1. Tổng kết

Dự án "Website giới thiệu tỉnh Nghệ An" đã được hoàn thành đầy đủ theo yêu cầu bài tập Tin học 12 - Bài 18. Website có cấu trúc rõ ràng, giao diện đẹp mắt, nội dung phong phú và ý nghĩa.

### 9.2. Kiến thức đã học được

Qua quá trình thực hiện đề tài, em đã:
- Nắm vững HTML5, CSS3, JavaScript
- Hiểu về thiết kế responsive
- Biết cách tổ chức cấu trúc website
- Rèn luyện tư duy logic
- Kết nối kiến thức với thực tế

### 9.3. Ý nghĩa của đề tài

Đề tài không chỉ giúp em học tập tốt môn Tin học mà còn:
- Góp phần quảng bá quê hương Nghệ An
- Phát huy tinh thần yêu nước, yêu quê hương
- Bảo tồn và phát huy giá trị văn hóa truyền thống
- Ứng dụng công nghệ vào đời sống

### 9.4. Lời cảm ơn

Em xin chân thành cảm ơn:
- Thầy/Cô giáo hướng dẫn
- Gia đình động viên
- Bạn bè hỗ trợ

---

## PHỤ LỤC

### A. Danh sách file

| File | Dung lượng | Mô tả |
|------|-----------|-------|
| index.html | 5.3 KB | Trang chủ |
| specialties.html | 7.2 KB | Trang đặc sản |
| tourism.html | 7.7 KB | Trang du lịch |
| culture.html | 7.7 KB | Trang văn hóa |
| contact.html | 4.2 KB | Trang liên hệ |
| style.css | 10.8 KB | File CSS |
| script.js | 6.9 KB | File JavaScript |
| images/ | ~5 MB | 10 hình ảnh |

### B. Tài liệu tham khảo

1. **HTML & CSS:**
   - W3Schools - https://www.w3schools.com
   - MDN Web Docs - https://developer.mozilla.org

2. **JavaScript:**
   - JavaScript.info - https://javascript.info
   - MDN JavaScript Guide

3. **Nội dung về Nghệ An:**
   - Wikipedia tiếng Việt
   - Trang web chính thức của tỉnh Nghệ An
   - Sách giáo khoa Địa lý 12

### C. Screenshots

> [!NOTE]
> Để thêm screenshots vào báo cáo, hãy:
> 1. Mở website trên trình duyệt
> 2. Chụp ảnh màn hình mỗi trang
> 3. Dán vào phần này

---

**HẾT**

---

> **Ghi chú:** Báo cáo này được soạn thảo theo đúng format bài tập Tin học 12. Học sinh có thể chỉnh sửa, bổ sung thêm thông tin cá nhân (họ tên, lớp, trường) trước khi nộp bài.
