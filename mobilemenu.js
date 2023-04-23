const body = document.querySelector('.body');
const navMobileMenuButton = document.querySelector('.nav_mobile-menu-button');
const navMobileMenu = document.querySelector('.nav_mobile-menu');

const handleBodyOverflow = () => {
  console.log('handleBodyOverflow function called');
  if (navMobileMenu.classList.contains('is-hidden')) {
    console.log('Fullscreen menu is currently displayed');
    body.classList.add('overflow-hidden');
    navMobileMenu.classList.remove('is-hidden');
  } else {
    console.log('Fullscreen menu is currently hidden');
    body.classList.remove('overflow-hidden');
    navMobileMenu.classList.add('is-hidden');
  }
};

navMobileMenuButton.addEventListener('click', () => {
  console.log('navMobileMenuButton clicked');
  handleBodyOverflow();
});

//working but ?

const body = document.querySelector('.body');
const navMobileMenuButton = document.querySelector('.nav_mobile-menu-button');
const navMobileMenu = document.querySelector('.nav_mobile-menu');

const handleBodyOverflow = () => {
  console.log('handleBodyOverflow function called');
  if (!navMobileMenu.offsetHeight > 0) {
    console.log('Fullscreen menu is currently displayed');
    body.classList.add('overflow-hidden');
  } else {
    console.log('Fullscreen menu is currently hidden');
    body.classList.remove('overflow-hidden');
  }
};

navMobileMenuButton.addEventListener('click', () => {
  console.log('navMobileMenuButton clicked');
  handleBodyOverflow();
});

//

const body = document.querySelector('.body');
const navMobileMenuButton = document.querySelector('.nav_mobile-menu-button');
const navMobileMenu = document.querySelector('.nav_mobile-menu');

const handleBodyOverflow = () => {
  console.log('handleBodyOverflow function called');
  body.classList.toggle('overflow-hidden');
  navMobileMenu.classList.toggle('is-hidden');
};

navMobileMenuButton.addEventListener('click', () => {
  console.log('navMobileMenuButton clicked');
  handleBodyOverflow();
});
