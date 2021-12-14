import React, {useState} from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import logo from "../../Assets/logo-groot.png"
import getGreetingBasedOnTimeOfDay from "../../Helpers/greetingHelper";

function WelcomePage() {
    const[loginOpen, setLoginOpen] = useState(false);
    const[registerOpen, setRegisterOpen] = useState(false);

    return(

        <div className="container">
            <img src={logo} alt="logo"/>

            <h1>{getGreetingBasedOnTimeOfDay(new Date().getHours())}, welcome to foodkeeper</h1>
            {/*<h3>Keep track of all your recipes</h3>*/}

            <div className="box-controller">

                <div
                    className={(loginOpen ? "selected-controller" : "controller")}
                     onClick={() => { setLoginOpen(true); setRegisterOpen(false)}}
                >
                    Sign In
                </div>

            <div
                className={(registerOpen ? "selected-controller" : "controller")}
                onClick={() => {setRegisterOpen(true); setLoginOpen(false)}}
            >
                Sign up
            </div>

            </div>


            <div className="box-container">
                {loginOpen && <SignIn/>}
                {registerOpen && <SignUp setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}
            </div>

        </div>
    );
}

export default WelcomePage;