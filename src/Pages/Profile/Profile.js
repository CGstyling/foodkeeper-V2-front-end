import React, {useContext, useEffect, useState} from "react";
import "./Profile.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";


function Profile() {
    //fetch profiel gegevens van auth
    const {user} = useContext(AuthContext);

    //fetch all recipes by user id === userid from token
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
                console.log(result.data);
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
                <h1>Recepten pagina van {user.username}</h1>
                <p>Gebruikersnaam: {user.username}</p>
                <p>Recepten: {userRecipes.length} </p>

            </div>
            <div className="buttons-profile">
                {/*<button>*/}
                {/*    All recipes*/}
                {/*</button>*/}
                {/*<button>*/}
                {/*    category*/}
                {/*</button>*/}
                {/*<button>*/}
                {/*    edit profile*/}
                {/*</button>*/}
                <hr/>
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