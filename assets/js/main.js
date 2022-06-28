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

/* ================ CHANGE MAIN IMG PRODUCT DETAILS ================*/

let mainImg = document.getElementById("main__img");
let thumbImg = document.querySelectorAll(".prodetails__thumb-img img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentIndex = 0;
function changeImageByIndex(index) {

    document.querySelectorAll(".prodetails__thumb-img").forEach(item =>{
        item.classList.remove("img-active");
    })

    currentIndex = index;
    mainImg.src = thumbImg[index].getAttribute("src");
    thumbImg[index].parentElement.classList.add("img-active");
}

thumbImg.forEach((imgElement, index) => {
    imgElement.addEventListener("click", e => {
        changeImageByIndex(index);
    })
});

prevBtn.addEventListener("click", e =>{
    if(currentIndex == 0) {
        currentIndex = thumbImg.length - 1;
    }
    else {
        currentIndex--;
    }

    changeImageByIndex(currentIndex);
})
nextBtn.addEventListener("click", e =>{
    if(currentIndex == thumbImg.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    
    changeImageByIndex(currentIndex);
})

changeImageByIndex(0);