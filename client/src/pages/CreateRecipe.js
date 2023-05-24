import { useState } from 'react'

function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: [],
        instructions: '',
        imageURL: '',
        cookingTime: 0,
        recipeOwner: null,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setRecipe({ ...recipe, [name]: value })
    }

    const handleIngredientChange = (e, index) => {
        const { value } = e.target
        const ingredients = recipe.ingredients
        ingredients[index] = value
        setRecipe({ ...recipe, ingredients: ingredients })
    }

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="create-recipe">
            <form onSubmit={onSubmit}>
                <h2>Create Recipe</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <div>
                        {recipe.ingredients.map((ingredient, index) => (
                            <input
                                key={index}
                                type="text"
                                name="ingredients"
                                value={ingredient}
                                className="ingredient-input"
                                onChange={(e) => {
                                    handleIngredientChange(e, index)
                                }}
                            />
                        ))}
                        <button type="button" onClick={addIngredient}>
                            Add Ingredient
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        name="instructions"
                        id="instructions"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="imageURL">imageURL</label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cookingTime">Cooking Time (minutes)</label>
                    <input
                        type="number"
                        id="cookingTime"
                        name="cookingTime"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Create Recipe</button>
            </form>
        </div>
    )
}

export default CreateRecipe
