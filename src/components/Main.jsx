import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
function Main() {

    const [ingredients, setIngredients] = React.useState([["all the main spices", "pasta", "ground beef", "tomato paste"]])

    const ingredientItems = ingredients.map(
    (ingredient, index) => <li key={index}>{ingredient}</li>
    )

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        if(newIngredient !== ''){setIngredients([...ingredients, newIngredient])}
    }

  return (
    <main>
      <form action={addIngredient} className="ingredient-form">
        <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add Ingredient"
            name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
            {
            ingredients.length > 0 && 
            <ClaudeRecipe ingredients={ingredients} ingredientItems={ingredientItems} />
            }
    </main>
  );
}

export default Main;