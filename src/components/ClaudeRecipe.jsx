import React from "react"

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-section">
      <h2>Your Generated Recipe</h2>
      <pre className="recipe-text">{recipe}</pre>
    </section>
  )
}
