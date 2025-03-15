document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
  const menuItems = document.querySelectorAll('.mobile-menu-link');
  const body = document.querySelector('body');

  function openMenu() {
    mobileMenuWrapper.classList.add('is-open');
    body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    mobileMenuWrapper.classList.remove('is-open');
    body.classList.remove('overflow-hidden');
  }

  mobileMenuOpenBtn.addEventListener('click', openMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
});

// ------------------------------SCROLL---------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
