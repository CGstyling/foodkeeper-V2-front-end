import React, {useContext, useEffect, useState} from "react";
import "./Home.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";

function Home() {
    const [recipeDetails, setRecipeDetails] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem("token");
            let url = "";
            try {
                if(user.roleName === "ROLE_ADMIN") {
                    url = "http://localhost:8080/foodkeeper/recipes"
                } else {
                    url = "http://localhost:8080/foodkeeper/publicRecipes";
                }
                const result = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
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
                {recipeDetails && recipeDetails.map((recipeData, index) => {
                    return <RecipeCard key={index} recipeData={recipeData}/>
                })}
            </>
            }
        </div>
    );
}

export default Home;