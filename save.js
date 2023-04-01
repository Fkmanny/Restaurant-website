

  //Navbar Code ======================================================================================


const closebtnEl = document.querySelector(".closebtn");
const navbarEl = document.querySelector(".nav");

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



  //code to Create and display Saved Items ======================================================================================
  

let newArrayy = JSON.parse(localStorage.getItem("newArrayy")); // Get Array

const savedItemsEl = document.querySelector('.saved-items') // Get the div main from html file

// for (let index = 0; index < newArrayy.length; index++) { 
  newArrayy.forEach(element => {
    
    // let currentsaved = newArrayy[index];
    let saveEl = document.createElement('div');
    saveEl.className = "save-El"
    saveEl.innerHTML = `<img class="savedImg" src="${element.strMealThumb}">
    <div class="savedDesc"> 
    <h3 id="cardP-h3" class="cardP-h3">${element.strMeal}</h3>
    <p>Category : ${element.strCategory} </p>
    <button class="mealy2" id="removesaved">Remove Meal</button>
    </div>`

    savedItemsEl.appendChild(saveEl);
    savedItemsEl.style.display = "flex";

    
    
  });

  


document.getElementById('removesaved').addEventListener('click',()=>{
  let newArrayy = JSON.parse(localStorage.getItem("newArrayy")); // Get Array

  newArrayy.splice(); 
localStorage.setItem("newArrayy", JSON.stringify(newArrayy));

});

// document.getElementById('removesaved').addEventListener('click',()=>{
//   let value1 = newArray2.idMeal;
//   for (let index = 0; index < newArray2.length; index++) {
//     if (  === JSON.parse(localStorage.getItem("newArrayy"))[index].idMeal) {
//         newArrayy.splice(index, 1); 

//     }
//     localStorage.setItem("newArrayy", JSON.stringify(newArrayy));
// }
// });







  