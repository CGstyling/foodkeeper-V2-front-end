import React, {useContext, useEffect, useState} from "react";
import "./Profile.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";


function Profile() {

    const {user} = useContext(AuthContext);
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        async function fetchUserRecipeData() {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            try {
                const result = await axios.get(`http://localhost:8080/foodkeeper/users/${userId}/recipes`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserRecipes(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        fetchUserRecipeData()
    }, [])

    return(
        <div className="profile-container">

            <div className="header-profile">
                <h1>{user.username} 's Recipes</h1>
                <p>Username: {user.username}</p>
                <p>Recipes: {userRecipes.length} </p>
            </div>


            <div className="recipe-wrapper">
                {Object.keys(userRecipes).length > 0 &&
                <>
                    {userRecipes && userRecipes.map((recipeData, index) => {
                        return <RecipeCard key={index} recipeData={recipeData}/>
                    })}
                </>
                }
            </div>
        </div>
    )
}

export default Profile;