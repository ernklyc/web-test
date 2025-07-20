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

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', function() {
    // Ticker içeriğini oluştur
    createTickerContent();
    
    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
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