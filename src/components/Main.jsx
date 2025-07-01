import React from 'react';
function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientItems = ingredients.map(
    (ingredient, index) => <li key={index}>{ingredient}</li>
    )

    function handelSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
        event.target.reset()
    }

  return (
    <main>
      <form onSubmit={handelSubmit} className="ingredient-form">
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