// Ticker için yemek listesi
const foodItems = [
    'PIZZA',
    'HOT DOGS', 
    'SALADS',
    'DRINKS',
    'DESSERTS',
    'TORTILLAS',
    'SHAWARMA',
    'BURGERS',
    'FRENCH FRIES'
];

// Ticker içeriğini dinamik olarak oluştur
function createTickerContent() {
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        // İçeriği temizle
        tickerContent.innerHTML = '';
        
        // Yemek listesini 6 kez tekrarla (smooth loop için)
        for (let i = 0; i < 6; i++) {
            foodItems.forEach(item => {
                const span = document.createElement('span');
                span.innerHTML = `🍕 ${item}`;
                tickerContent.appendChild(span);
            });
        }
    }
}

// Optimized Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.menu-item, .category-item, .contact-card, .menu-item-detailed, .brand-logo'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced performance with requestAnimationFrame
function optimizeAnimations() {
    let ticking = false;
    
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', function() {
    // Ticker içeriğini oluştur
    createTickerContent();
    
    // Initialize optimized animations
    initializeAnimations();
    optimizeAnimations();
    
    // Smooth scroll için
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});