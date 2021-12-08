import React, {useEffect, useState} from "react";
import "./Home.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";
import axios from "axios";

function Home() {
    const [recipeDetails, setRecipeDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem("token");
            try {
                const result = await axios.get("http://localhost:8080/foodkeeper/recipes", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result);
                console.log(result.data);
                setRecipeDetails(result.data);
            } catch (e) {
                console.error(e);
            }
        }
         fetchData();
    }, []);


    return (

        <div className="recipe-wrapper">
            {/*<RecipeCard data={recipeDetails}/>*/}
            {Object.keys(recipeDetails).length > 0 &&
            <>
                {recipeDetails && recipeDetails.map((recipeData) => {
                    return <RecipeCard key={recipeData.recipeId} recipeData={recipeData}/>
                })}
            </>
            }
        </div>
    );
}

export default Home;