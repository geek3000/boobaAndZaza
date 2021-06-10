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
    body.classList.remove('noscrol');
    hamburgerBtn.classList.remove('open');
    closeMenu();
  } else {
    body.classList.add('noscrol');
    hamburgerBtn.classList.add('open');
    openMenu(100);
  }
});
