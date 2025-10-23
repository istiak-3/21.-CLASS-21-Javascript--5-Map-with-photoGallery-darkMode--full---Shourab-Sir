let allImages = Array.from(document.querySelectorAll(".image img"))
let imagePreviewer = document.querySelector(".image-previewer")
let previewImage = document.querySelector(".preview_img img")
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let previewWrapper = document.querySelector(".wrapper")
let cross = document.querySelector(".cross")

allImages.map(function (el, index) {

    el.addEventListener('click', () => {
        imagePreviewer.classList.add('active')
        previewImage.src = el.src

        arrowRight.addEventListener('click', () => {
            if (index < allImages.length - 1) {
                index++
                previewImage.src = allImages[index].src
            } else {
                index = 0
                previewImage.src = allImages[index].src
            }
        })

        arrowLeft.addEventListener('click', () => {
            if (index > 0) {
                index--
                previewImage.src = allImages[index].src
            } else {
                index = allImages.length - 1
                previewImage.src = allImages[index].src
            }
        })
    })
})

cross.addEventListener('click', () => {
    imagePreviewer.classList.remove('active')
})

imagePreviewer.addEventListener('click', (e) => {

    if (!(previewWrapper.contains(e.target))) {
        imagePreviewer.classList.remove('active')
    }

})

