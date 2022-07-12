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