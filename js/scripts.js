
'use strict';

/* ============================================
    NAVIGATION SCROLL EFFECT
    ============================================ */
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ============================================
    MOBILE MENU TOGGLE
    ============================================ */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navLinks && menuToggle) {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navLinks && menuToggle) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

/* ============================================
    SMOOTH SCROLLING FOR ANCHOR LINKS
    ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

/* ============================================
    CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ============================================ */
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navLinks || !menuToggle) return;
    
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

/* ============================================
    TESTIMONIALS CAROUSEL
    ============================================ */
let currentSlide = 0;
let track;
let indicators = [];
let totalSlides = 0;

function updateCarousel() {
    if (!track) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    if (totalSlides === 0) return;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateCarousel();
}

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;
    updateCarousel();
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

function loadReviewsFromSheet() {
    const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWVShluRhSc_cMTgQzqrasN4EQyGFU_mcNcJwvf3Lx25xmHHpqOcNTrZqOwzJLN1jTXwIIB2oC9HyP/pub?output=csv";

    fetch(SHEET_URL)
        .then(res => res.text())
        .then(text => {
            Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                transformHeader: header => header.toLowerCase(),
                complete: (results) => {
                    const data = results.data;

                    console.table(
                        data.map(r => ({
                            name: r.name,
                            approved_raw: r.approved,
                            approved_clean: r.approved?.trim().toLowerCase()
                        }))
                    );

                    const approvedReviews = data.filter(row => {
                        const approved = row.approved?.trim().toLowerCase();
                        const permission = row.permission?.trim().toLowerCase();

                        return approved === 'yes' && permission === 'yes';
                    });

                    buildCarousel(approvedReviews);
                }
            });
        })
        .catch(err => console.error("Review load error:", err));
}

function buildCarousel(reviews) {
    console.log('Building carousel with', reviews.length, 'reviews');
    console.log(reviews);
    track = document.getElementById('reviewTrack');
    const indicatorContainer = document.querySelector('.carousel-indicators');

    track.innerHTML = "";
    indicatorContainer.innerHTML = "";

    reviews.forEach((r, index) => {
        track.innerHTML += `
            <div class="review-slide">
                <div class="review-content">
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="review-text">"${r.feedback}"</p>
                    <div class="review-rating">
                        ${"★".repeat(r.rating)}
                    </div>
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">
                            ${r.name.substring(0,2).toUpperCase()}
                        </div>
                        <div class="reviewer-details">
                            <div class="reviewer-name">${r.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        indicatorContainer.innerHTML += `
            <span class="indicator ${index === 0 ? 'active' : ''}"
                  onclick="goToSlide(${index})"></span>
        `;
    });

    indicators = document.querySelectorAll('.indicator');
    totalSlides = reviews.length;
    currentSlide = 0;
    updateCarousel();
}

loadReviewsFromSheet();

/* ============================================
    INITIALIZE ON DOM READY
    ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize aria-expanded for accessibility
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    
    // Carousel infinite scroll setup
    const track = document.querySelector('.carousel-track');
    if (track) {
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }
});