// Main application logic is in menu.js for simplicity
// This file can be used for additional utilities if needed

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(111, 78, 55, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(111, 78, 55, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
});
