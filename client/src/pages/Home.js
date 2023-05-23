import recipes from '../data/recipes'

function Home() {
    return (
        <div className="recipes-container">
            <h1>All Recipes</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <div>
                            <h2>{recipe.name}</h2>
                            <button className="">Save</button>
                        </div>
                        <div className="instructions">
                            <p>{recipe.instructions[0]}</p>
                            <p>{recipe.instructions[1]}</p>
                            <p>{recipe.instructions[2]}</p>
                        </div>
                        <img src={recipe.imageURL} alt={recipe.name} />
                        <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
