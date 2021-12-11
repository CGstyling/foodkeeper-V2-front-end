import React from "react";
import axios from "axios";

function UnBlockRecipeButton({recipeId}) {

    async function unblockRecipe() {

        const token = localStorage.getItem("token");

        try {
            const result = await axios.patch(`http://localhost:8080/foodkeeper/recipes/${recipeId}`,{
                blockRecipe: false,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <>
            <button type="button" onClick={unblockRecipe}> unblock Recipe </button>
        </>
    );
}

export default UnBlockRecipeButton;