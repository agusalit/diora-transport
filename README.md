# 🚗 Diora Transport

**Diora Transport** is a responsive, modern single-page website built for a Bali-based private driver and transport service. It highlights reliable transport options, tour packages, and easy contact via WhatsApp and email.

---

## 🌍 Live Demo
**Website:** [https://dioratransport.com](https://dioratransport.com) *(custom domain via Netlify)*  
**Status:** Online and optimized for mobile devices.

---

## 📖 Table of Contents
- [🚗 Diora Transport](#-diora-transport)
  - [🌍 Live Demo](#-live-demo)
  - [📖 Table of Contents](#-table-of-contents)
  - [🧭 Overview](#-overview)
  - [✨ Features](#-features)
  - [📁 Project Structure](#-project-structure)
  - [🧰 Tech Stack](#-tech-stack)
  - [🧩 Sections](#-sections)
    - [1. Header \& Navigation](#1-header--navigation)
    - [2. Hero Section](#2-hero-section)
    - [3. Services Section](#3-services-section)
    - [4. Tours Section](#4-tours-section)
    - [5. About Section](#5-about-section)
    - [6. Gallery Section](#6-gallery-section)
    - [7. Contact Section](#7-contact-section)
    - [8. Footer](#8-footer)
  - [📱 Responsive Design](#-responsive-design)
  - [⚙️ JavaScript Functions](#️-javascript-functions)
  - [🔍 SEO \& Optimization](#-seo--optimization)
  - [🚀 Deployment](#-deployment)
  - [📜 License \& Credits](#-license--credits)
  - [👨‍💻 Developer](#-developer)

---

## 🧭 Overview
**Goal:**  
Create a professional static website to promote Diora Transport’s services — focusing on clarity, trust, and mobile-friendly design.

**Key Highlights:**
- One-page smooth navigation  
- WhatsApp & email contact buttons  
- Auto-scrolling image gallery  
- Clean and modern layout  
- Fast loading and responsive  

---

## ✨ Features
- Sticky header that changes color on scroll  
- Responsive mobile navigation menu  
- Services, tours, about, gallery, and contact sections  
- Pure CSS carousel with smooth animation  
- SEO-ready meta tags and structure  

---

## 📁 Project Structure
```
project-folder/
│
├── index.html # Main HTML page
├── assets/ # images, icons, etc.
|__ styles.css # main css styling
|__ script.js # script file for function and interactivity
└── README.md # Project documentation
```

---

## 🧰 Tech Stack
| Type | Technology |
|------|-------------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (Flexbox + Grid) |
| **Icons** | Font Awesome 6.4.0 |
| **Fonts** | Google Fonts – Inter |
| **Scripting** | Vanilla JavaScript |
| **Hosting** | Netlify (with custom domain) |

---

## 🧩 Sections
### 1. Header & Navigation
- Fixed transparent header with scroll effect  
- Mobile-friendly hamburger menu  

### 2. Hero Section
- Full-screen banner  
- Clear CTA buttons for WhatsApp and Email  

### 3. Services Section
- Grid layout of main offerings  
- Clean card design  

### 4. Tours Section
- Masonry-style layout  
- Highlighted tour cards with hover effects  

### 5. About Section
- “Why Choose Us” and “Meet Your Driver” stories  
- Emphasizes professionalism and trust  

### 6. Gallery Section
- CSS-only infinite scrolling carousel  

### 7. Contact Section
- Contact info (WhatsApp, Email, Address)  
- Google Map placeholder or future embed  

### 8. Footer
- Simple footer with copyright  

---

## 📱 Responsive Design
- Uses CSS Grid, Flexbox, and media queries  
- Optimized for:
  - Mobile (max-width: 768px)
  - Tablet (max-width: 992px)
  - Desktop (default)

---

## ⚙️ JavaScript Functions
```js
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navLinks").classList.remove("active");
}

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
```

Purpose:
- Mobile menu toggle
- Add background color to header when scrolling

## 🔍 SEO & Optimization

Meta tags included:

<meta name="description" content="Professional Bali driver service. Airport shuttle, day tours, and hotel transfers. Reliable, comfortable, and affordable transportation in Bali.">


## 🚀 Deployment

Hosting: Netlify

Domain: dioratransport.com


## 📜 License & Credits

Images: Unsplash

Icons: Font Awesome

Font: Inter

License: MIT

## 👨‍💻 Developer

Developed with ❤️ by Alit

A Computer Science student aspiring to become a full-stack developer and build software businesses in the future.