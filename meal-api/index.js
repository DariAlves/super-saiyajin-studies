const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
fetch(url)
  .then(response => response.json())
  .then(data => getMeal(data));

function getMeal(data) {
  data.meals.forEach(meal => {
    const root = document.getElementById('root');
    root.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" />
      <p>${meal.strInstructions}</p>
    `;
  });
}
