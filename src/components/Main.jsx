import React from 'react';
function Main() {

    const [ingredients, setIngredients] = React.useState(['tomato', 'salt', 'pepper'])

    const ingredientItems = ingredients.map(
    (ingredient, index) => <li key={index}>{ingredient}</li>
    )

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
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
      <label className='ingredient-list'>      
      <ul>
        {ingredientItems}
      </ul>
      </label>
    </main>
  );
}

export default Main;