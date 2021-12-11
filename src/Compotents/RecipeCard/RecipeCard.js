import React from "react";
import "./RecipeCard.css"
import {Link} from "react-router-dom";
import DownloadFile from "../DownloadFile/DownloadFile";


function RecipeCard({recipeData}) {

    return(
        <div className="card">

            <div className="card-body">
                <DownloadFile uri={recipeData.recipeFile} classname="card-img" nameImage="food"/>
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