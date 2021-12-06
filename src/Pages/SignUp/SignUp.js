import React from "react";
import "./SignUp.css";
import {useForm} from "react-hook-form";
// import {useHistory} from "react-router-dom";
import axios from "axios";

function SignUp({setLoginOpen, setRegisterOpen}) {
    // const history = useHistory();
    const {register, handleSubmit} = useForm();

    async function handleFormSubmit(data) {
        try{
            const result = await axios.post("http://localhost:8080/foodkeeper/signup", {
                email: data.email,
                username: data.username,
                password: data.password,
            })
            console.log(result);
        }catch (e) {
            console.error(e);
        }
        setLoginOpen(true);
        setRegisterOpen(false);
        console.log(data)
    }

    return(
        <div className="inner-container">
            <h1 className="header-login">Sign up</h1>

            <form className="box" onSubmit={handleSubmit(handleFormSubmit)}>

                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        className="login-input"
                        type="text"
                        id="username"
                        placeholder="Your username"
                        {...register("username")}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="emailadress">Email:</label>
                    <input
                        className="login-input"
                        type="text"
                        id="emailadress"
                        placeholder="Your email-adress"
                        {...register("email")}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="login-input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                        {...register("password")}
                    />
                </div>
                <button
                    type="submit"
                    className="login-btn"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default SignUp;