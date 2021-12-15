import React, {useContext, useEffect, useState} from "react";
import "./Recipe.css"
import CommentBox from "../../Compotents/CommentBox/CommentBox";
import {useParams} from "react-router-dom";
import axios from "axios";
import DownloadFile from "../../Compotents/DownloadFile/DownloadFile";
import BlockRecipeButton from "../../Compotents/BlockRecipeButton/BlockRecipeButton";
import UnBlockRecipeButton from "../../Compotents/BlockRecipeButton/UnBlockRecipeButton";
import {AuthContext} from "../../Context/AuthContext";

function Recipe() {

    const {recipeId} = useParams();
    const {user} = useContext(AuthContext);

    const[recipeData, setRecipeData] = useState({});
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        setUserRole(user.roleName)

        async function fetchRecipeData() {
            const token = localStorage.getItem("token");
            try{
                const result = await axios.get(`http://localhost:8080/foodkeeper/recipes/${recipeId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result)
                setRecipeData(result.data);
            }catch (e) {
                console.error(e)
            }
        }
        fetchRecipeData();
    },[])

    return (
        <div className="recipe-container">

            <div className="recipe">

                {userRole === 'ROLE_ADMIN' &&
                <UnBlockRecipeButton recipeId={recipeData.recipeId}/>
                }

                {userRole === 'ROLE_ADMIN' &&
                <BlockRecipeButton recipeId={recipeData.recipeId}/>
                }

                {Object.keys(recipeData).length > 0 &&
                <section>
                <div className="recipe-picture">
                    <DownloadFile uri={recipeData.recipeFile} classname="recipe-picture" nameImage="food"/>
                </div>

                <hr className="hr-line"/>

                <h1>{recipeData.recipeName}</h1>

                <h1>Ingredients:</h1>
                <div className="recipe-ingredient-list">

                    <p>
                        {recipeData.recipeIngredient}
                    </p>
                </div>

                <h1>Steps:</h1>
                <div className="recipe-description">
                    <p>
                        {recipeData.recipeDescription}
                    </p>
                </div>
                </section>
                }

                <hr className="hr-line"/>

            </div>
            <h1>Comments:</h1>

            <CommentBox recipeId={recipeId}/>

        </div>

    );
}

export default Recipe;