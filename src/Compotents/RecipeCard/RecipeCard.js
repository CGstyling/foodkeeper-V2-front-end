import React from "react";
import "./RecipeCard.css"
import soep from "../../Assets/soep.jpg"
import {Link} from "react-router-dom";


function RecipeCard({recipeData}) {

    return(
        <div className="card">

            <div className="card-body">
                <img className="card-img" src={soep} alt="soep"/>
                <h2 className="card-title">{recipeData.recipeName}</h2>
                {/*<p className="card-description">{data.recipeDescription}</p>*/}
            </div>

            <Link to={`recipe/${recipeData.recipeId}`}>
            <button className="card-button"> View recipe </button>
            </Link>

        </div>
    );
}

export default RecipeCard;