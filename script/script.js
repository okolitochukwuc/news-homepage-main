const toggleBtn = document.querySelector('.js-toggle-btn');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.js-close-btn');
const home = document.querySelector('.js-home');

toggleBtn.addEventListener('click', () => {
  backdrop.classList.remove('hidden');
  mobileNav.classList.remove('hidden');
});

backdrop.addEventListener('click', () => {
  backdrop.classList.add('hidden');
  mobileNav.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.add('hidden');
  mobileNav.classList.add('hidden');
});

home.addEventListener('click', () => {
  backdrop.classList.add('hidden');
  mobileNav.classList.add('hidden');
});
