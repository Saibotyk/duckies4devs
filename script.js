// CAROUSEL IN MOBILE

const buttonNextMobile = document.querySelector(".pictures-next-js");
const buttonHandlerMobile = document.querySelector(".pictures-handler-js")
const imgArray = [
    "img/canard-jaune-1-l.png",
    "img/canard-jaune-2-l.png",
    "img/canard-jaune-3-l.png",
    "img/canard-jaune-4-l.png",
    "img/canard-jaune-5-l.png"
]

let count1 = 0;
buttonNextMobile.addEventListener('click', function (event) {
    if (count1 > 3) {
        count1 = 0
    } else {
        let imgThumbs = document.querySelector(".pictures-img-js");
        count1++;
        imgThumbs.src = imgArray[count1];
    }
    console.log(imgArray[count1]);
})


buttonHandlerMobile.addEventListener('click', function (event) {
    if (count1 <= 0) {
        count1 = 4
    } else {
        let imgThumbs = document.querySelector(".pictures-img-js");
        count1--;
        imgThumbs.src = imgArray[count1];
    }
    console.log(imgThumbs.src);
})

// PICTURES IN DESKTOP 

