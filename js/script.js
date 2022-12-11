const hamburger = document.querySelector('.navigation-button');
const nav = document.querySelector('.navigation');
const picture = document.querySelector('.nav-photo');

const handleClick = () => {
  nav.classList.toggle('navigation-active');
  picture.classList.toggle('index');
}

hamburger.addEventListener('click', handleClick);