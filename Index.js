/* Swiper */
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
});

/*navbar */

const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar'); 

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    });
};

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    });
};


/*contact now button */

let popup = document.getElementById("popup");

function openPopup() {
  console.log("Opening popup");
  popup.classList.add("open-popup");
}

function closePopup() {
  console.log("Closing popup");
  popup.classList.remove("open-popup");
}


/*alert*/
function alertme() {
    window.alert("Coming Soon");
  }


/* Shop Now button*/

document.getElementById("myButton").onclick=function () {
  location.href = "shop.html";
};


/* new swiper*/

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".front-cont", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });