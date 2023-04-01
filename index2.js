const searchbtnEl = document.getElementById('buttonPage');
const msgEl = document.getElementById('msg');
const inputNameEl = document.getElementById('inputName');



searchbtnEl.addEventListener("click", () =>{
    let inputValue = document.getElementById('inputName').value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => { 
        const itemsEl = document.getElementById('items');
        itemsEl.innerHTML = "";
        if(data.meals == null){
            
            msgEl.style.display = "block";

        }else if(inputValue == ""){
            msgEl.style.display = "block";

        }
        else{
            msgEl.style.display = "none";
            data.meals.forEach(meal => {
                
                itemDiv = document.createElement("div");
                itemDiv.className = "singleItem";
                itemDiv.setAttribute('onclick', `details(${meal.idMeal})`)
                let itemInfo = `<div class="card" style="width: 18rem;">
                <img class="card-img-top" text-center src="${meal.strMealThumb}" alt="Card image cap">
                <div class="card-body">
                  <h3 class="card-text">${meal.strMeal}</h3>
                </div>
                </div>`
                itemDiv.innerHTML = itemInfo;
                itemsEl.appendChild(itemDiv);
            });
        }
    })
   
    
});

inputNameEl.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("buttonPage").click();
    }
});

const cardPageEl = document.getElementById('cardPage');


function details(id){
    console.log(id)

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(detail => {
        // console.log(detail);
        // console.log(detail.meals);
        // console.log(detail.meals[0].strMeal);
        let detailer = detail.meals[0];

        const cardPageEl = document.getElementById('cardPage');
        cardPageEl.innerHTML = "";
        


        itemDiv = document.createElement("div");
                itemDiv.className = "cardP";
                // itemDiv.setAttribute('onclick', `details(${meal.idMeal})`)
                let itemInfo = `<div class="ingre" >
                <img class="cardPimg" text-center src="${detailer.strMealThumb}" alt="Card image cap">
                <div class="deticon">
                    <div class="md-container">
                        <div class="meal-det">
                            <h2 class="htwo">MEAL NAME</h2>
                            <h3 id="cardP-h3" class="cardP-h3">${detailer.strMeal}</h3>
                            <p>Category : ${detailer.strCategory} </p>
                            <div class="tagbuttons">
                            </div>
                            <button class="mealy" id="addMeal">Save Meal</button>
                            <button class="mealy" id="removeMeal">Remove Meal</button>

                        </div>
                        <i class="fa-solid fa-utensils fa-flip fork"></i>
                    </div>
                    <div class="IIcontainer">
                        <div class="ingredient-container">
                            <h2 class="htwo">INGREDIENTS</h2>
                            <div class="ingredients">
                            </div>
                        </div>
                        <div class="Instructions">
                        <h2 class="htwo" id="htwo">INSTRUCTIONS</h2>

                        </div>
                    </div>
                    <a class="yt-container"> watch tutorial
                     <i class="fa-brands fa-youtube yt-logo" style="color: #FF0000;"></i>
                    </a>
                    <i class="fa-solid fa-xmark fa-2x close bot"></i>

                </div>    
                </div>`
                itemDiv.innerHTML = itemInfo;
                cardPageEl.appendChild(itemDiv);
                cardPageEl.style.display = "block";
                document.querySelector("body").classList.add("freeze");
                document.querySelector(".main-body").classList.add("freeze");

                document.querySelector('.bot').addEventListener('click', (event) =>{
                    cardPageEl.style.display = "none";
                    document.querySelector("body").classList.remove("freeze");
                    document.querySelector(".main-body").classList.remove("freeze");

                });


                const mealdetEl = document.querySelector(".meal-det");
                console.log(detailer);

                if (detailer.strTags) {
                    const splitted = detailer.strTags.split(',');

                splitted.forEach(element => {
            
                    let splibutton = document.createElement('button');
                    splibutton.classList.add("tagbutton");
                    splibutton.innerText = "#"+element;
                    // splibutton.setAttribute('data-id', element);
                    document.querySelector(".tagbuttons").appendChild(splibutton);
                
                });
                }


                const ytlinkEl = document.querySelector('.yt-container');
                ytlinkEl.href = `${detailer.strYoutube}`
                console.log(ytlinkEl.href);
                

               

                const ingredientsEl = document.querySelector('.ingredients');
                const ingArr = [];

                for (let index = 1; index < 20; index++) {
                    let ing = eval(`detailer.strIngredient${index}`);
                    if(ing == null){

                    }else{
                    ingArr.push(ing);
                     }
                }

                
                let ingArray =  ingArr.filter(word => word.length > 1);

                console.log(ingArray);

                ingArray.forEach(element => {
                    let ingSegEl = document.createElement('div');
                    ingSegEl.classList.add("ingSeg");

            
                    let inglink = document.createElement('p');
                    inglink.classList.add("ingredientP");
                    inglink.innerText = element;
                    // inglink.setAttribute('data-id', element);
                    ingSegEl.appendChild(inglink);
                    ingredientsEl.appendChild(ingSegEl);
                    
                    let lineImg = document.createElement('img');
                    lineImg.classList.add("ingredientline");
                    lineImg.src = "images/Rectangle 14.png" ;
                    // lineImg.setAttribute('data-id', element);
                    ingSegEl.appendChild(lineImg);
                    ingredientsEl.appendChild(ingSegEl);
                
                });

                const ingMea = [];

                for (let index = 1; index < 20; index++) {
                    let ing = eval(`detailer.strMeasure${index}`);
                    if(ing == null){

                    }else{
                    ingMea.push(ing);
                     }
                }

                
                let ingMeasure =  ingMea.filter(word => word.length > 1 || word);

                console.log(ingMeasure);

                ingMeasure.forEach(element => {
                    let ingSegEl = document.querySelector('.ingSeg');

                    let inglink = document.createElement('p');
                    inglink.classList.add("ingredientPP");
                    inglink.innerText = element;
                    // inglink.setAttribute('data-id', element);
                    ingSegEl.appendChild(inglink);
                    ingredientsEl.appendChild(ingSegEl);
                });

                const instructionsEl = document.querySelector(".Instructions");

                if (detailer.strInstructions) {
                    const instruction = detailer.strInstructions.split('.');
                    console.log(instruction);

                    // for (let index = 0; index < instruction.length; index++) {
                    //     let intro = instruction[index];
                    //     if  (intro[0] = ) {
                    //         intro = intro.substring(4);
                    //         console.log(intro);
                    //     }

                    //     }

                    
                    let instrsEL = document.createElement('div');
                    instrsEL.classList.add("ingIns");

                    instruction.forEach(element => {
                        
                        let inglink = document.createElement('p');
                        inglink.classList.add("instructionP");
                        inglink.innerText = element;
                        // inglink.setAttribute('data-id', element);
                        instrsEL.appendChild(inglink);
                        instructionsEl.appendChild(instrsEL);

                    });
                    }

                        let SavedArr = [];


                    document.getElementById('addMeal').addEventListener('click',()=>{
                        // let mealImage = detailer.strMealThumb;
                        // let mealName = detailer.strMeal;
                        // let Category = detailer.strCategory;

                        document.getElementById('addMeal').style.backgroundColor = "#d3d3d3";
                        alert("Saved")
                        
                        SavedArr.push(detail.meal);

                        localStorage.setItem("SavedArr", JSON.stringify(detailer));



                        // console.log(SavedArr);

                        if(SavedArr){  
                            let SavedArr1 = JSON.parse(localStorage.getItem("SavedArr"));
                        
                        // console.log(SavedArr1);
                        
                        let newArr = JSON.parse(localStorage.getItem("newArr"));
                        
                        if (!newArr || newArr === null) {
                            newArr = [];
                        }
                        
                        newArr.push(SavedArr1);
                        
                        localStorage.setItem("newArr", JSON.stringify(newArr));
                        
                        const newArrayy  = [...new Map(newArr.map((m) => [m.idMeal, m])).values()];
                        
                        console.log(newArrayy);

                        localStorage.setItem("newArrayy", JSON.stringify(newArrayy));

                        }
                    });


                    document.getElementById('removeMeal').addEventListener('click',()=>{
                        let newArrayy = JSON.parse(localStorage.getItem("newArrayy")); // Get Array

                        for (let index = 0; index < newArrayy.length; index++) {
                            if ( detailer.idMeal === newArrayy[index].idMeal) {
                                newArrayy.splice(index, 1); 

                            }
                            localStorage.setItem("newArrayy", JSON.stringify(newArrayy));

                        }

                    });


                    

                    

                    

                    

                




    })
}






// --------work in progress kindly ignore----
const buttonsEl = document.getElementById('buttons');
// const buttonmeals = ['Butter','Pie', 'Dessert', 'Beef', 'Chicken', 'Nut', 'Spaghetti', 'Pork', 'Apple', 'Cheese', 'Fish', 'Onion', 'Pasta', 'Potato', 'Cake', 'Berry', 'Egg', 'Sausage', 'Meat' ];

const buttonmeals = [];

fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response => response.json())
    .then(data => { 
        let jaggy = data.categories;
        // let index = 0;

        for (let index = 0; index < jaggy.length; index++) {
            const abc = jaggy[index].strCategory;
            // console.log(abc);
                buttonmeals.push(abc);
        }
        buttonmeals.forEach(element => {
            
            let eachButton = document.createElement('button');
            eachButton.classList.add("Page2button");
            eachButton.innerText = element;
            eachButton.setAttribute('data-id', element);
            buttonsEl.appendChild(eachButton);
        
        
        });


    })
    // console.log(buttonmeals);






const Page2buttonEls = document.querySelectorAll('.Page2button');

buttonsEl.addEventListener("click", (e)=>{
    const id = e.target.dataset.id;
    // console.log(id);

    if(id){ 
        // Page2buttonEls.forEach(element => {
    
    
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    .then(response => response.json())
    .then(data => { 
        // console.log(data.meals.strCategory);
        const itemsEl = document.getElementById('items');
        itemsEl.innerHTML = "";
        if(data.meals == null){
            msgEl.style.display = "block";
        }
        else{
            msgEl.style.display = "none";
            data.meals.forEach(meal => {
                console.log(meal);
                itemDiv = document.createElement("div");
                itemDiv.className = "singleItem";
                itemDiv.setAttribute('onclick', `details(${meal.idMeal})`)
                let itemInfo = `<div class="card" style="width: 18rem;">
                <img class="card-img-top" text-center src="${meal.strMealThumb}" alt="Card image cap">
                <div class="card-body">
                <h3 class="card-text">${meal.strMeal}</h3>
                </div>
                </div>`
                itemDiv.innerHTML = itemInfo;
                itemsEl.appendChild(itemDiv);
            });
        }
    })

}
})







window.addEventListener("load", ()=>{
    msgEl.style.display = "none";
    cardPageEl.style.display = "none";
    
});

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
  


//   ================================================================================================================
//   ================================================================================================================
//   ================================================================================================================
//   ================================================================================================================


// let newArr2 = JSON.parse(localStorage.getItem("newArr"));



