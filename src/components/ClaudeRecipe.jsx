export default function ClaudeRecipe(props){
    return(
    <section className='ingredients-section'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.ingredientItems}</ul>
                {props.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>

    )
}