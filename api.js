fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then (data =>{ displayMeal(data.meals)});

const displayMeal = meals=>{
    const div= document.getElementById('mealsCall');
    meals.forEach(meal => {
        const ingredientsDiv = document.createElement('div')
        ingredientsDiv.className='meal-name'
        const mealDetails=`
        <h4>${meal.strMeal} </h4>
        <p>${meal.strIngredient1} </p>
        <p>${meal.strIngredient2} </p>
        <p>${meal.strIngredient3} </p>
        <p>${meal.strIngredient4} </p>
        <p>${meal.strIngredient5} </p>
        <p>${meal.strIngredient6} </p>
        <p>${meal.strIngredient7} </p>
        <p>${meal.strIngredient8} </p>
        <p>${meal.strIngredient9} </p>
        <p>${meal.strIngredient11} </p>
        `
        ingredientsDiv.innerHTML=mealDetails;

        div.appendChild(ingredientsDiv);
        
    });
    // for (let i = 0; i < meals.length; i++) {
    //     const meal = meals[i];
     
    }
    