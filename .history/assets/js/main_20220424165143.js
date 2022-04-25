/* ================ SCROLL HEADER ================*/
function scrollheader() {
    let header = document.getElementsByClassName('header');
    if (this.scrollY >= 200) {
        header.classList.add('scroll-header')
    }
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollheader);