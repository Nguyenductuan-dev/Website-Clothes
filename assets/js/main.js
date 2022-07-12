/* ================ SCROLL HEADER ================*/
function scrollheader() {
    let header = document.getElementById('header');
    if (this.scrollY >= 200) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollheader);

/* ================ SHOW/HIDDEN MENU MOBILE ================*/
let iconMobile = document.getElementById('icon-navbar');
let close = document.getElementById('close');
let navbar = document.getElementById('navbar');

if(iconMobile) {
    iconMobile.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}
if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

