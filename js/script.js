// Toggle class active
// toggle ini artinya, kalau sebelumnya ada jadi tidak ada dan kalau sebelumnya tidak ada jadi ada.

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// klik diluar sidebar untuk menghilangkan nav atau hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});