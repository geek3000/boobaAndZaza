const body = document.querySelector('body');
const hamburgerBtn = document.getElementById('btnHamburger');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu(size) {
  mobileMenu.style.width = `${size}%`;
}

function closeMenu() {
  mobileMenu.style.width = '0';
}

hamburgerBtn.addEventListener('click', () => {
  if (hamburgerBtn.classList.contains('open')) {
    body.classList.remove('noscroll');
    hamburgerBtn.classList.remove('open');
    closeMenu();
  } else {
    body.classList.add('noscroll');
    hamburgerBtn.classList.add('open');
    openMenu(100);
  }
});
