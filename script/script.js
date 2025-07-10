// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', function() {
    // FAST FOOD harflerini animasyonlu göster
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        const delay = letter.getAttribute('data-delay');
        letter.style.animationDelay = delay + 'ms';
    });
    
    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mouse takip eden göz animasyonu
    const eyeballs = document.querySelectorAll('.eyeball');
    const eyes = document.querySelectorAll('.eye');
    
    document.addEventListener('mousemove', function(e) {
        eyeballs.forEach((eyeball, index) => {
            const eye = eyes[index];
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            
            const deltaX = e.clientX - eyeCenterX;
            const deltaY = e.clientY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);
            
            const distance = Math.min(15, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 10);
            
            const eyeballX = Math.cos(angle) * distance;
            const eyeballY = Math.sin(angle) * distance;
            
            eyeball.style.transform = `translate(calc(-50% + ${eyeballX}px), calc(-50% + ${eyeballY}px))`;
        });
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
    
    // Intersection Observer ile animasyonları tetikle
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Menu itemları için observer
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Sayfa yüklendiğinde otomatik scroll (isteğe bağlı)
// window.addEventListener('load', function() {
//     setTimeout(function() {
//         window.scrollTo({
//             top: window.innerHeight,
//             behavior: 'smooth'
//         });
//     }, 3000); // 3 saniye sonra otomatik scroll
// });