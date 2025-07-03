import React from 'react';
function Main() {

    const [ingredients, setIngredients] = React.useState([])

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
            ingredients.length > 0 && <section className='ingredients-section'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
    </main>
  );
}

export default Main;