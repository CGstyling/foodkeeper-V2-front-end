import React, {useContext} from "react";
import './App.css';
import Header from "./Compotents/Header/Header";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import Recipe from "./Pages/Recipe/Recipe";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import {AuthContext} from "./Context/AuthContext";

function App() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <>
            {isAuthenticated ?
                <Header/> :
                <Route path="/welcome">
                    <WelcomePage/>
                </Route>
            }

            <Switch>
                {isAuthenticated ?
                    <>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/add-recipe">
                            <AddRecipe/>
                        </Route>
                        <Route path="/recipe/:recipeId">
                            <Recipe/>
                        </Route>
                    </>
                    :
                    <>
                        <Redirect to="/welcome"/>

                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                        <Route path="/signin">
                            <SignIn/>
                        </Route>
                    </>
                }
            </Switch>
        </>
    );
}

export default App;
