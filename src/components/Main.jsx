function Main() {
  return (
    <main>
      <form className="ingredient-form">
        <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add Ingredient"
            name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </main>
  );
}

export default Main;