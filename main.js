/**
 * Main JavaScript for Nghệ An Tourism Website
 * Handles interactivity, form validation, and modal functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Initialize all features
    initNavbar();
    initMobileMenu();
    initContactForm();
    initImageLoading();
    initSmoothScroll();

    console.log('🌟 Nghệ An Tourism Website loaded successfully!');
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

/**
 * Contact form handling with validation
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Validate
            if (!validateForm(formData)) {
                showMessage('Vui lòng điền đầy đủ thông tin!', 'error');
                return;
            }

            // Simulate sending (in production, this would send to a backend)
            showMessage('Đang gửi...', 'loading');

            setTimeout(() => {
                console.log('Form submitted:', formData);
                showMessage('✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.', 'success');
                form.reset();
            }, 1500);
        });
    }

    function validateForm(data) {
        // Check for empty fields
        if (!data.name || !data.email || !data.message) {
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Email không hợp lệ!', 'error');
            return false;
        }

        return true;
    }

    function showMessage(text, type) {
        if (!messageDiv) return;

        messageDiv.className = 'mt-4 p-4 rounded-lg';
        messageDiv.classList.remove('hidden');

        switch (type) {
            case 'success':
                messageDiv.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-300');
                break;
            case 'error':
                messageDiv.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-300');
                break;
            case 'loading':
                messageDiv.classList.add('bg-blue-100', 'text-blue-800', 'border', 'border-blue-300');
                break;
        }

        messageDiv.textContent = text;

        // Auto-hide after 5 seconds for success/error
        if (type !== 'loading') {
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 5000);
        }
    }
}

/**
 * Modal functionality for destination details
 */
const destinationData = {
    'cua-lo': {
        title: 'Bãi Biển Cửa Lò',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
        description: 'Bãi biển Cửa Lò là một trong những bãi biển đẹp nhất miền Bắc Việt Nam, với cát trắng mịn trải dài hơn 10km và làn nước trong xanh.',
        highlights: [
            'Bãi cát trắng trải dài hơn 10km',
            'Nước biển trong xanh, sóng êm',
            'Nhiều resort và khách sạn cao cấp',
            'Hải sản tươi sống phong phú',
            'Các hoạt động thể thao biển'
        ],
        bestTime: 'Tháng 4 - Tháng 9',
        location: 'Thị xã Cửa Lò, cách TP. Vinh 18km'
    },
    'que-bac': {
        title: 'Quê Bác - Kim Liên',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=1200&auto=format&fit=crop',
        description: 'Khu di tích Kim Liên là nơi sinh ra và lớn lên của Chủ tịch Hồ Chí Minh, một điểm đến du lịch văn hóa - lịch sử đặc biệt quan trọng.',
        highlights: [
            'Nhà lá nơi Bác Hồ sinh ra',
            'Ao cá, giếng nước lịch sử',
            'Bảo tàng Hồ Chí Minh',
            'Không gian yên bình, thiên nhiên',
            'Giá trị giáo dục cao'
        ],
        bestTime: 'Quanh năm (đặc biệt ngày sinh nhật Bác - 19/5)',
        location: 'Làng Sen, xã Kim Liên, huyện Nam Đàn'
    },
    'pu-mat': {
        title: 'Vườn Quốc Gia Pù Mát',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop',
        description: 'Pù Mát là vườn quốc gia rộng hơn 90.000 hecta với rừng nguyên sinh kỳ vĩ, hệ sinh thái đa dạng và nhiều loài động vật quý hiếm.',
        highlights: [
            'Rừng nguyên sinh hùng vĩ',
            'Thác Khe Kèm tuyệt đẹp',
            'Hơn 1.900 loài thực vật',
            'Hơn 600 loài động vật',
            'Trekking, cắm trại, khám phá'
        ],
        bestTime: 'Tháng 10 - Tháng 4 (mùa khô)',
        location: 'Huyện Con Cuông, cách TP. Vinh 130km'
    },
    'dao-che': {
        title: 'Đảo Chè Thanh Chương',
        image: 'https://images.unsplash.com/photo-1595183353597-2a5b161c56f6?q=80&w=1200&auto=format&fit=crop',
        description: 'Đảo Chè là một trong những điểm du lịch sinh thái độc đáo với những đồi chè xanh ngát trải dài, không khí trong lành và phong cảnh thơ mộng.',
        highlights: [
            'Đồi chè xanh ngát bất tận',
            'Không khí trong lành, mát mẻ',
            'Check-in cực "hot"',
            'Trải nghiệm hái chè',
            'Thưởng thức trà xanh tươi'
        ],
        bestTime: 'Tháng 3 - Tháng 5',
        location: 'Xã Thanh Chương, huyện Thanh Chương'
    },
    'den-cuong': {
        title: 'Đền Cuông',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
        description: 'Quần thể đền chiền cổ kính với kiến trúc độc đáo, nơi thờ phụng các vị thần linh và chiến công của các anh hùng dân tộc.',
        highlights: [
            'Kiến trúc cổ kính độc đáo',
            'Lịch sử hàng trăm năm',
            'Lễ hội truyền thống sôi động',
            'Giá trị văn hóa tâm linh',
            'Cảnh quan yên bình'
        ],
        bestTime: 'Mùa lễ hội (tháng 2-3 âm lịch)',
        location: 'Huyện Con Cuông, Nghệ An'
    },
    'lang-sen': {
        title: 'Làng Sen - Quê Bác',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
        description: 'Làng Sen với ao sen, nhà lá mang đến không gian yên bình, tái hiện tuổi thơ của Chủ tịch Hồ Chí Minh và nét đẹp làng quê Việt Nam.',
        highlights: [
            'Ao sen tuyệt đẹp',
            'Nhà lá truyền thống',
            'Không gian yên bình',
            'Giá trị lịch sử sâu sắc',
            'Hoạt động giáo dục ý nghĩa'
        ],
        bestTime: 'Mùa sen nở (tháng 5-8)',
        location: 'Xã Kim Liên, huyện Nam Đàn'
    }
};

function openModal(destinationId) {
    const modal = document.getElementById('destination-modal');
    const modalContent = document.getElementById('modal-content');
    const data = destinationData[destinationId];

    if (!data || !modal || !modalContent) return;

    // Build modal content
    const content = `
        <div class="relative">
            <img src="${data.image}" alt="${data.title}" class="w-full h-80 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h2 class="text-white text-4xl font-heading font-bold p-8">${data.title}</h2>
            </div>
        </div>
        <div class="p-8">
            <p class="text-gray-700 text-lg mb-6 leading-relaxed">${data.description}</p>
            
            <div class="mb-6">
                <h3 class="text-2xl font-heading font-bold mb-4 text-gray-900">Điểm Nổi Bật</h3>
                <ul class="space-y-3">
                    ${data.highlights.map(item => `
                        <li class="flex items-start gap-3">
                            <i class="fas fa-check-circle text-primary mt-1"></i>
                            <span class="text-gray-700">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-primary/5 p-4 rounded-lg">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-calendar-alt text-primary text-xl"></i>
                        <h4 class="font-semibold text-gray-900">Thời Gian Lý Tưởng</h4>
                    </div>
                    <p class="text-gray-600">${data.bestTime}</p>
                </div>
                <div class="bg-secondary/5 p-4 rounded-lg">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-map-marker-alt text-secondary text-xl"></i>
                        <h4 class="font-semibold text-gray-900">Vị Trí</h4>
                    </div>
                    <p class="text-gray-600">${data.location}</p>
                </div>
            </div>
            
            <div class="flex gap-4">
                <a href="#contact" onclick="closeModal()" class="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg font-semibold transition-all hover:scale-105">
                    <i class="fas fa-phone mr-2"></i>Liên Hệ Tư Vấn
                </a>
                <button onclick="closeModal()" class="px-6 py-3 border-2 border-gray-300 hover:border-primary rounded-lg font-semibold transition-colors">
                    Đóng
                </button>
            </div>
        </div>
    `;

    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('destination-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('destination-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

/**
 * Lazy loading images
 */
function initImageLoading() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function () {
            this.classList.add('loaded');
        });

        // If already cached
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Newsletter form (if added)
 */
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        console.log('Newsletter subscription:', email);
        alert('✓ Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất về du lịch Nghệ An.');
        this.reset();
    });
}
