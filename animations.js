/**
 * AOS (Animate On Scroll) Initialization and Custom Animations
 * Handles all scroll-triggered animations for the website
 */

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            delay: 0,
            anchorPlacement: 'top-bottom'
        });

        console.log('✨ Animations initialized');
    }

    // Add custom scroll animations
    initScrollAnimations();
    initParallaxEffect();
    initCounterAnimation();
});

/**
 * Custom scroll reveal animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger child elements
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Parallax effect for hero section
 */
function initParallaxEffect() {
    const hero = document.getElementById('home');

    if (!hero) return;

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        // Apply parallax to hero background
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

/**
 * Animated counters (can be used for statistics if needed)
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

/**
 * Scroll progress indicator
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #059669, #0ea5e9);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

/**
 * Reveal elements on scroll with custom timing
 */
class ScrollReveal {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            delay: options.delay || 0,
            distance: options.distance || '30px',
            duration: options.duration || 600,
            easing: options.easing || 'ease',
            ...options
        };

        this.init();
    }

    init() {
        this.elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = `translateY(${this.options.distance})`;
            el.style.transition = `opacity ${this.options.duration}ms ${this.options.easing}, transform ${this.options.duration}ms ${this.options.easing}`;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * this.options.delay);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(el);
        });
    }
}

// Apply to specific elements (example usage)
// new ScrollReveal('.custom-reveal', { delay: 100, duration: 800 });

/**
 * Mouse parallax effect for cards
 */
function initCardParallax() {
    const cards = document.querySelectorAll('.destination-card, .specialty-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            this.style.transform = `perspective(1000px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
}

// Initialize card parallax
initCardParallax();

/**
 * Typing effect for hero text (optional, can be enabled)
 */
function initTypingEffect(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Example usage (commented out):
// const heroTitle = document.querySelector('.hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     initTypingEffect(heroTitle, originalText);
// }

/**
 * Image zoom on hover
 */
document.querySelectorAll('.destination-card img, .specialty-card img').forEach(img => {
    img.style.transition = 'transform 0.5s ease';
});

console.log('🎬 Advanced animations loaded');
