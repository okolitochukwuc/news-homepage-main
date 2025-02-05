const toggleBtn = document.querySelector('.js-toggle-btn');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.js-close-btn');
const home = document.querySelector('.js-home');

function toggleNav() {
  backdrop.classList.add('hidden');
  mobileNav.classList.add('hidden');
}

toggleBtn.addEventListener('click', () => {
  backdrop.classList.remove('hidden');
  mobileNav.classList.remove('hidden');
});

backdrop.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);
home.addEventListener('click', toggleNav);
