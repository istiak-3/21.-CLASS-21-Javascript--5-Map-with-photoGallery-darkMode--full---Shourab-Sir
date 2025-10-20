/** ---- darkMode Section Start ---- */
let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector("body");
let title = document.querySelector(".title span");
let cursor = document.querySelector(".cursor");
let cursorDot = document.querySelector(".cursorDot");

darkModeBtn.addEventListener('click', (event) => {

    if (!(body.classList.contains('darkMode'))) {
        body.classList.add('darkMode');
        title.innerText = 'Dark';
    } else {
        body.classList.remove('darkMode');
        title.innerText = 'Light';
    }

});

window.addEventListener('mousemove', (event) => {
    event.preventDefault();

    let mouseLeft = event.clientX + 'px';
    let mouseTop = event.clientY + 'px';

    cursor.style.left = mouseLeft;
    cursor.style.top = mouseTop;

    cursorDot.style.left = mouseLeft;
    cursorDot.style.top = mouseTop;
})
/** ---- darkMode Section End ---- */



/** ---- photoGallery Section Start ---- */
let images = document.querySelectorAll(".gallery img");
let galleryImg = document.querySelector(".galleryImg");
let imgPreviewer = document.querySelector(".imgPreviewer");
let arrowCross = document.querySelector(".arrowCross");
let arrowLeft = document.querySelector(".arrowLeft");
let arrowRight = document.querySelector(".arrowRight");
let imgContainer = document.querySelector(".imgContainer");

images.forEach((currentImg, index) => {



    currentImg.addEventListener('click', function (e) {
        e.stopPropagation()

        galleryImg.classList.add('active');
        imgPreviewer.src = currentImg.src;


        arrowLeft.addEventListener('click', () => {
            e.stopPropagation()
            if (index > 0) {
                index--
                imgPreviewer.src = images[index].src;
            }
            else {
                index = images.length - 1
                imgPreviewer.src = images[index].src;
            }
            console.log(images.length, index, images[index].src);


        })

        arrowRight.addEventListener('click', () => {

            if (index < images.length - 1) {
                index++
                imgPreviewer.src = images[index].src;
            }else{
                index = 0
                imgPreviewer.src = images[index].src;
            }

        })





    })

})



arrowCross.addEventListener('click', function () {
    galleryImg.classList.remove('active');
})

window.addEventListener('click', function (e) {

    if (galleryImg.classList.contains('active') && !(imgContainer.contains(e.target))) {
        galleryImg.classList.remove('active');
    }

})

/** ---- photoGallery Section End ---- */