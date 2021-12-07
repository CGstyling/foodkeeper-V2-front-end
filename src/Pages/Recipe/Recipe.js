import React from "react";
import "./Recipe.css"
import soep from "../../Assets/soep.jpg"

function Recipe() {


    return(
        <div className="recipe-container">

            <div className="recipe">

                <button>back</button>

                <div className="recipe-picture">
                    <img className="recipe-picture" src={soep} alt="food-picture"/>
                </div>

                <hr className="hr-line"/>

                <h1>Recipe title</h1>

                <div className="recipe-ingredient-list">
                    <h1>Ingredients:</h1>
                    <ul>
                        <li>
                            meel
                        </li>
                        <li>
                            meel
                        </li>
                        <li>
                            meel
                        </li>
                        <li>
                            meel
                        </li>
                    </ul>
                </div>

                <h1>Steps:</h1>
                <div className="recipe-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi aperiam assumenda consequuntur                               culpadistinctio dolore, eligendi eos ipsa molestias non omnis placeat quia recusandae tempora ullam veritatis.                             Doloremque? ntium animi aperiam assumenda consequuntur culpa distinctio dolore, eligendi eos ipsa molestias non                            omnis placeat quia recusandae tempora ullam veritatis. Doloremque?Lorem ipsum dolor sit amet, consectetur                                  adipisicing elit. A accusantium animi aperiam assumenda consequuntur culpa distinctio dolore, eligendi eos ipsa                            molestias non omnis placeat quia recusandae tempora ullam veritatis. Doloremque?Lorem ipsum dolor sit amet,                                consectetur adipisicing elit. A accusantium animi aperiam assumenda consequuntur culpa distinctio dolore, eligendi                         eos ipsa molestias non omnis placeat quia recusandae tempora ullam veritatis. Doloremque?Lorem ipsum dolor sit amet,                       consectetur adipisicing elit. A accusantium animi aperiam assumenda consequuntur culpa distinctio dolore, eligendi                         eos ipsa molestias non omnis placeat quia recusandae tempora ullam veritatis. Doloremque?Lorem ipsum dolor sit amet,                       consectetur adipisicing elit. A accusantium animi aperiam assumenda consequuntur culpa distinctio dolore, eligendi                         eos ipsa molestias non omnis placeat quia recusandae tempora ullam veritatis. Doloremque?
                    </p>
                </div>

                <hr className="hr-line"/>



            </div>
        </div>
    );
}

export default Recipe;