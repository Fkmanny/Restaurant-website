const navbarEl = document.querySelector(".nav");
const navcloseEl = document.querySelector(".nav-close");

const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const imageContainerEl = document.querySelector(".image-container")

const imagessliderEl = document.querySelector(".image-slider");

const bottleEl = document.querySelector(".bottle");

const section3El = document.querySelector(".section3");
const section4El = document.querySelector(".section4");
const square51El = document.querySelector(".square51");


const closebtnEl = document.querySelector(".closebtn");



/* Open when someone clicks on the span element */
navbarEl.addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("lay");
    // document.querySelector(".overlay").style.width = "40%";
    document.querySelector("body").classList.add("freeze");
    document.querySelector(".main-body").classList.add("freeze");

  });
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  closebtnEl.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("lay");
    document.querySelector("body").classList.remove("freeze");
    document.querySelector(".main-body").classList.remove("freeze");
  });


// const bottomEl = document.getElementById("bottom");

// bottomEl.addEventListener("click", ()=>{
//     console.log("jig");
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
    navbarEl.style.top = "16px";
    // navcloseEl.style.top = "16px";
  } else {
    document.querySelector(".header").style.top = "-74px";
    navbarEl.style.top = "-74px";
    // navcloseEl.style.top = "-74px";
  }
  prevScrollpos = currentScrollPos;
}


window.addEventListener("resize", ()=>{
    if (window.innerWidth>979) {
        imagessliderEl.classList.remove("live");
    }
    if (window.innerWidth<979) {
        imagessliderEl.classList.add("live");
        imagessliderEl.style.display = "block"

        square51El.classList.remove("dye");
        square51El.classList.add("ink");

    }
    if (window.innerWidth = 375) {
        square51El.classList.remove("dye");
        square51El.classList.add("ink");
    }
});

//    =============================================================================================


// ...=.=.=========================================================================================


window.addEventListener("load", ()=>{
    if (window.innerWidth>979) {
        imagessliderEl.classList.remove("live");
        msgEl.classList.add("leg");

    }
    if (window.innerWidth<979) {

        imagessliderEl.classList.add("live");
        imagessliderEl.style.display = "block"
        square51El.classList.remove("dye");
        square51El.classList.add("ink");

    }
    

    // if (window.innerWidth = 375) {
    //     square51El.classList.remove("dye");
    //     square51El.classList.add("ink");
    // }
});

twoEl.addEventListener("click", ()=>{
    imageContainerEl.innerHTML = "";
    const newEl = document.createElement("img");
    newEl.src = "images/ori-award.png";
    newEl.classList.add("sliders");
    imageContainerEl.appendChild(newEl);
    oneEl.classList.remove("alive");
    threeEl.classList.remove("alive");
    fourEl.classList.remove("alive");
    twoEl.classList.add("alive");

    document.getElementById('mainh1').innerText = "The Hidden Ingredients"
    document.getElementById('mainh3').innerText = "Leave The Old Flavour"
    document.getElementById('mainp').innerText = " penatibus aliquam amet tellus Sit tellus Morbi facilisis quam scelerisque sapien. Et, lobortis sed senectus vivamus molestie. volutpat Condimentum  ";
    document.getElementById('mainfoodImg').src = "images/ori-award.png";

});
oneEl.addEventListener("click", ()=>{
    imageContainerEl.innerHTML = "";
    const newEl = document.createElement("img");
    newEl.src = "images/food1.png";
    newEl.classList.add("sliders");
    imageContainerEl.appendChild(newEl);

    twoEl.classList.remove("alive");
    threeEl.classList.remove("alive");
    fourEl.classList.remove("alive");
    oneEl.classList.add("alive");

    document.getElementById('mainh1').innerText = "The Key To Fine Dining"
    document.getElementById('mainh3').innerText = "Chase The New Flavour"
    document.getElementById('mainp').innerText = " Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus ";
    document.getElementById('mainfoodImg').src = "images/food1.png";

    
});
threeEl.addEventListener("click", ()=>{
    imageContainerEl.innerHTML = "";
    const newEl = document.createElement("img");
    newEl.src = "images/awardtomato.png";
    newEl.classList.add("sliders");
    imageContainerEl.appendChild(newEl);

    oneEl.classList.remove("alive");
    twoEl.classList.remove("alive");
    fourEl.classList.remove("alive");
    threeEl.classList.add("alive");

    document.getElementById('mainh1').innerText = "The Joy Food Brings";
    document.getElementById('mainh3').innerText = "The Salivating Flavour";
    document.getElementById('mainp').innerText = " Morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat ";
    document.getElementById('mainfoodImg').src = "images/awardtomato.png";
    


});
fourEl.addEventListener("click", ()=>{
    imageContainerEl.innerHTML = "";
    const newEl = document.createElement("img");
    newEl.src = "images/insta3.png";
    newEl.classList.add("sliders");
    imageContainerEl.appendChild(newEl);

    twoEl.classList.remove("alive");
    threeEl.classList.remove("alive");
    oneEl.classList.remove("alive");
    fourEl.classList.add("alive");

    document.getElementById('mainh1').innerText = "Eat To Your Satisfaction"
    document.getElementById('mainh3').innerText = "It Is In The Flavour"
    document.getElementById('mainp').innerText = " tellus Sit tellus lobortis sed senectus Morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet vivamus molestie. Condimentum volutpat ";
    document.getElementById('mainfoodImg').src = "images/insta3.png";



});

if (!bottleEl){
    const abcEl = document.createElement("img");
    abcEl.src = "images/Specials.png";
    abcEl.classList.add("rand");
    section3El.appendChild(abcEl);
}

const buttonEl = document.querySelector(".play");
const trailerEl = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video");
const closeEl = document.querySelector(".close");

buttonEl.addEventListener("click", () => {
    trailerEl.classList.remove("hide");
    document.querySelector("body").classList.add("freeze");
    document.querySelector(".main-body").classList.add("freeze");


});

closeEl.addEventListener("click", () => {
    trailerEl.classList.add("hide");
    document.querySelector("body").classList.remove("freeze");
    document.querySelector(".main-body").classList.remove("freeze");


    videoEl.pause();
    videoEl.currentTime = 0;
});


// ==============================================================================================
// ==============================================================================================

