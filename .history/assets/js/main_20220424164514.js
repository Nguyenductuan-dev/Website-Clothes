/* ================ SCROLL HEADER ================*/
function scrollheader() {
let header = document.getElementsByClassName('header');
    if (this.scrollY >= 200) {
        scrollHeader.classList.add('scroll-header')
    }
    else {
        scrollHeader.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollheader)