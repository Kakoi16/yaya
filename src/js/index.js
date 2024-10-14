const scrollable = document.getElementById('scrollable-content');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

scrollLeftBtn.addEventListener('click', () => {
  scrollable.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

scrollRightBtn.addEventListener('click', () => {
  scrollable.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});

const scrollableS = document.getElementById('scrollable-sewa');
const scrollLeftBtnS = document.getElementById('scrollLeftS');
const scrollRightBtnS = document.getElementById('scrollRightS');

scrollLeftBtnS.addEventListener('click', () => {
  scrollableS.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

scrollRightBtnS.addEventListener('click', () => {
  scrollableS.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});

// navbar
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const navbarTexts = document.querySelectorAll('.navbar-text');
  if (window.scrollY > 50) {
      navbar.classList.remove('navbar-large');
      navbar.classList.add('navbar-small');
      navbarTexts.forEach(text => text.classList.remove('navbar-text-large'));
      navbarTexts.forEach(text => text.classList.add('navbar-text-small'));
  } else {
      navbar.classList.remove('navbar-small');
      navbar.classList.add('navbar-large');
      navbarTexts.forEach(text => text.classList.remove('navbar-text-small'));
      navbarTexts.forEach(text => text.classList.add('navbar-text-large'));
  }
});

// Script untuk mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  document.querySelector('.hamburger-icon').classList.toggle('hidden');
  document.querySelector('.cross-icon').classList.toggle('hidden');
});

// Hasil

