# Nghệ An Tourism Website

## 🌟 Giới Thiệu

Website du lịch và đặc sản Nghệ An được thiết kế hoàn toàn bằng HTML5, TailwindCSS và JavaScript thuần. Website hiện đại, responsive và sẵn sàng deploy ngay lập tức.

## 📁 Cấu Trúc Thư Mục

```
d:/Ai/web tin/
├── index.html          # Trang chính
├── css/
│   └── custom.css      # CSS tùy chỉnh
├── js/
│   ├── main.js         # JavaScript chính
│   └── animations.js   # Hiệu ứng động
└── README.md           # File này
```

## ✨ Tính Năng

### Các Section
- ✅ **Hero Section**: Banner toàn màn hình với parallax
- ✅ **Giới Thiệu**: Thông tin về Nghệ An với icons
- ✅ **Điểm Đến**: 6 địa điểm du lịch nổi bật với modal chi tiết
- ✅ **Đặc Sản**: Showcase các đặc sản địa phương
- ✅ **Trải Nghiệm**: Timeline hoạt động du lịch
- ✅ **Bản Đồ**: Google Maps tích hợp
- ✅ **Liên Hệ**: Form liên hệ với validation
- ✅ **Footer**: Đầy đủ links và newsletter

### Tính Năng Kỹ Thuật
- 📱 **100% Responsive**: Tối ưu cho mobile, tablet, desktop
- 🎨 **Animations**: Smooth scroll, AOS, hover effects
- ⚡ **Performance**: Fast loading, lazy image loading
- 🔍 **SEO Optimized**: Meta tags, semantic HTML
- ♿ **Accessible**: ARIA labels, keyboard navigation
- 🌐 **Modern Stack**: Tailwind CSS 3.x, ES6+ JavaScript

## 🚀 Chạy Local

### Cách 1: Mở Trực Tiếp
1. Mở file `index.html` bằng trình duyệt web
2. Website sẽ chạy ngay lập tức

### Cách 2: Dùng Live Server (Khuyến nghị)
Nếu dùng VS Code:
```bash
# Cài extension Live Server
# Right-click vào index.html → "Open with Live Server"
```

Hoặc dùng Python:
```bash
# Python 3
cd "d:/Ai/web tin"
python -m http.server 8000

# Mở trình duyệt: http://localhost:8000
```

Hoặc dùng Node.js:
```bash
npx serve
```

## 📤 Deploy Lên Production

### Option 1: Netlify (Khuyến nghị - Dễ nhất)
1. Truy cập [netlify.com/drop](https://app.netlify.com/drop)
2. Kéo thả **toàn bộ thư mục** `d:/Ai/web tin` vào
3. Đợi 30 giây → Nhận link website

**Hoặc dùng Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
# Chọn thư mục: d:/Ai/web tin
```

### Option 2: Vercel
```bash
npm install -g vercel
cd "d:/Ai/web tin"
vercel --prod
```

### Option 3: GitHub Pages
```bash
# Tạo repo trên GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main

# Vào Settings → Pages → Deploy from branch: main
```

### Option 4: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🎨 Tùy Chỉnh

### Đổi Màu Sắc
Sửa trong `index.html` (dòng 33-39):
```javascript
colors: {
    primary: '#059669',    // Màu chính
    secondary: '#0ea5e9',  // Màu phụ
    accent: '#f59e0b',     // Màu nhấn
}
```

### Thay Đổi Nội Dung
- **Địa điểm**: Sửa HTML trong section `#destinations`
- **Đặc sản**: Sửa HTML trong section `#specialties`
- **Chi tiết modal**: Sửa object `destinationData` trong `js/main.js`

### Thêm/Bớt Section
- Copy cấu trúc section có sẵn
- Thêm link vào navbar
- Thêm `data-aos` attributes cho animation

## 📝 Checklist Trước Khi Deploy

- [ ] Kiểm tra tất cả links hoạt động
- [ ] Test form liên hệ
- [ ] Test responsive trên mobile
- [ ] Thay ảnh placeholder (nếu cần)
- [ ] Cập nhật thông tin liên hệ
- [ ] Kiểm tra SEO meta tags
- [ ] Test trên các trình duyệt khác nhau

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| HTML5 | - | Cấu trúc |
| Tailwind CSS | 3.x (CDN) | Styling |
| JavaScript | ES6+ | Logic |
| AOS | 2.3.1 | Scroll Animations |
| Font Awesome | 6.4.0 | Icons |
| Google Fonts | - | Typography |

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra Console (F12) xem có lỗi không
2. Đảm bảo có kết nối internet (CDN dependencies)
3. Clear cache trình duyệt

## 📄 License

MIT License - Sử dụng tự do cho mục đích học tập và thương mại.

---

**Developed with ❤️ for Nghệ An Tourism**
