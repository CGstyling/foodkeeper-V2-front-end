import React, {useContext} from 'react';
import "./SignIn.css"
import {AuthContext} from "../../Context/AuthContext";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {signInFunction} = useContext(AuthContext);

    async function handleFromSubmit(data) {
        try {
            const result = await axios.post('http://localhost:8080/foodkeeper/signin', {
                username: data.username,
                password: data.password,
            });
            console.log(result);
            //geef de token mee aan de logIn
            signInFunction(result.data.accessToken, result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <div className="inner-container">
            <h1 className="header-login">Sign in</h1>

            <form className="box" onSubmit={handleSubmit(handleFromSubmit)}>

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
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default SignIn;