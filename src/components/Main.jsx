import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromGoogle } from "../ai"

function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
  ])

  const [recipe, setRecipe] = React.useState("")
  const [recipeShown, setRecipeShown] = React.useState(false)

  const ingredientItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromGoogle(ingredients)
    setRecipe(recipeMarkdown)
    setRecipeShown(true)
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    if (newIngredient !== "") {
      setIngredients([...ingredients, newIngredient])
    }
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addIngredient(new FormData(e.target))
          e.target.reset()
        }}
        className="ingredient-form"
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          ingredientItems={ingredientItems}
          getRecipe={getRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

export default Main
