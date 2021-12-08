import React from "react";
import "./Profile.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";


function Profile() {
    //fetch profiel gegevens van auth
    //fetch all recipes by user id === userid from token

    return(
        <div className="profile-container">

            <div className="header-profile">
                <h1>Profiel pagina</h1>
                <p>Gebruikersnaam:</p>

            </div>
            {/*<div className="buttons-profile">*/}
            {/*    <button>*/}
            {/*        All recipes*/}
            {/*    </button>*/}
            {/*    <button>*/}
            {/*        category*/}
            {/*    </button>*/}
            {/*    <button>*/}
            {/*        edit profile*/}
            {/*    </button>*/}
            {/*    <hr/>*/}
            {/*</div>*/}
            {/*Hard coded recipe cards*/}
            <div className="recipe-wrapper">
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
                {/*<RecipeCard/>*/}
            </div>
        </div>
    )
}

export default Profile;