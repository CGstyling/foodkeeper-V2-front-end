import React from "react";
import axios from "axios";

function BlockRecipeButton({recipeId}) {

    async function blockRecipe() {

        const token = localStorage.getItem("token");

        try {
            const result = await axios.patch(`http://localhost:8080/foodkeeper/recipes/${recipeId}`,{
                blockRecipe: true,
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
            <button type="button" onClick={blockRecipe}> Block Recipe </button>
        </>
    );
}

export default BlockRecipeButton;