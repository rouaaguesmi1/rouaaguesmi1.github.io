// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Header Scroll Effect ---
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    
    menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.contains('active');
        
        // Toggle active classes
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = isActive ? '' : 'hidden';
    });

    // --- 3. Close Mobile Menu on Link Click ---
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

});