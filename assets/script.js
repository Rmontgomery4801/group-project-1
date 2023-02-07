const headerImage= document.getElementById('header-image');
const card= document.getElementById('card');
const formInput= document.querySelector('.form-input');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const mealList = document.getElementById('meal-list');
const searchBtn = document.getElementById('search-btn');



let html = "";
function getMealList(event) {
    event.preventDefault();
    let searchInputTxt = document.getElementById('search-input').value.trim();
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`) 
.then(response => {
    console.log(response)
    return response.json()
})
.then(data =>{
    console.log(data)
    if(data.meals){
        data.meals.forEach(_meal => {
            html += `<div class="card" data-meal-id="${_meal.idMeal}">
                    <img src="${_meal.strMealThumb}" alt="${_meal.strMeal}" class="meal-image">
                    <h3 class="recipe-title">${_meal.strMeal}</h3>
                    
            
                    
                    </div>
                    `
        }    
         )}

         else{
        html = "Sorry, we couldn't find your meal"

    }
    
    mealList.innerHTML = html;
    } )}

  function getMealrecipe(event){
    // if(event.target.classList.contains("recipe-title")){
    //     let getMealList=event.target.parentElement.parentElement
    //     fetch('http://www.themealdb.com/api/json/v1/1/filter.php?i=$(meal.dataset.id');
    //     then(
    //         console.log(data)
    //     )
    // }
    if(event.target.classList.contains("meal-image")){
        const closestParent = event.target.parentElement;
        const mealId = closestParent.getAttribute('data-meal-id');

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(mealId)
    }
  }


searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',  getMealrecipe);