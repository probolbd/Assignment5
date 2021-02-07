document.addEventListener('click', function(){
    document.getElementById("meal-info").style.display = "block";
})

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then (data =>{ displayMeal(data.meals)});

const displayMeal = meals=>{
    const div= document.getElementById('mealsCall');
    meals.forEach(meal => {
        const ingredientsDiv = document.createElement('div')
        ingredientsDiv.className='meal-name'
        const mealDetails=`
        <img src="${meal.strMealThumb}">
        <h4>${meal.strMeal} </h4>
        <button onclick="mealSearch('${meal.strMeal}')"> Details </button>
        `
        ingredientsDiv.innerHTML=mealDetails;
        div.appendChild(ingredientsDiv);   
    });
    }
    const mealSearch = strMeal =>{
        const url   =`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
        fetch(url)
        .then(res => res.json())
        .then (data => renderMeal(data.meals[0])); 
    }
    const renderMeal = meals=>{
        console.log(meals);
        const ingredientsDiv =document.getElementById('milesInt');
        ingredientsDiv.innerHTML=`
        <img src="${meals.strMealThumb}">
        <h1>${meals.strMeal}</h1>
        <p>&#10003; ${meals.strIngredient1} </p>
        <p>&#10003; ${meals.strIngredient2} </p>
        <p>&#10003; ${meals.strIngredient3} </p>
        <p>&#10003; ${meals.strIngredient4} </p>
        <p>&#10003; ${meals.strIngredient5} </p>
        <p>&#10003; ${meals.strIngredient6} </p>
        `
    }