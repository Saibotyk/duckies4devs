// STORAGE CHECK

let position = localStorage.getItem('position');
let position2 = localStorage.getItem('position2');
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
const imgThumbs = document.querySelector(".pictures-img-js");

let count1 = 0;
buttonNextMobile.addEventListener('click', function (event) {
    if (count1 >= 4) {
        count1 = 0
        imgThumbs.src = imgArray[count1];
    } else {
        count1++;
        imgThumbs.src = imgArray[count1];
    }
    console.log(imgArray[count1]);
})


buttonHandlerMobile.addEventListener('click', function (event) {
    if (count1 <= 0) {
        count1 = 4
        imgThumbs.src = imgArray[count1];
    } else {
        count1--;
        imgThumbs.src = imgArray[count1];
    }
})

// PICTURES IN DESKTOP

const liThumbs = document.querySelectorAll('.thumbs-js > li > img');;
liThumbs.forEach(element => {
    element.addEventListener('mouseover', function (e) {
        imgThumbs.src = imgArray[element.id];
    });
});

// ADD TO BUYLIST

const buttonBuy = document.querySelector('.add-cta-js');
const inputBuy = document.querySelector('.add-js > input').value;
const valueShopList = document.querySelector('.cart-js');


console.log(valueShopList)
buttonBuy.addEventListener('click', function (e) {
    valueShopList.textContent = inputBuy;
});

// ACCORDEON
let acordeon = document.querySelector('.acrd-js');
let acordeon2 = document.querySelector('.acrd2-js');
const btnAcordeon = document.querySelector('.acrd-btn-js');
const btnAcordeon2 = document.querySelector('.acrd2-btn-js');

btnAcordeon.addEventListener('click', function (e) {
    btnAcordeon.classList.toggle("closed")
    acordeon.classList.toggle('display-none')
    localStorage.setItem('acordeonState', acordeon.classList.contains('display-none') ? 'closed' : 'open');
    console.log(position)
});

btnAcordeon2.addEventListener('click', function (e) {
    btnAcordeon2.classList.toggle("closed");
    acordeon2.classList.toggle("display-none");
    localStorage.setItem('acordeonState2', acordeon2.classList.contains('display-none') ? 'closed' : 'open');
});

  const acordeonState = localStorage.getItem('acordeonState');
  const acordeonState2 = localStorage.getItem('acordeonState2');

  function verifyTheLocalStorage(localStorage, button, acordeon) {
    if (localStorage === 'closed') {
        button.classList.add('closed');
        acordeon.classList.add('display-none');
      }
  }

  verifyTheLocalStorage(acordeonState, btnAcordeon, acordeon);
  verifyTheLocalStorage(acordeonState2, btnAcordeon2, acordeon2);
