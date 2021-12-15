import React from "react";
import "./SignUp.css";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp({setLoginOpen, setRegisterOpen}) {

    const {register, handleSubmit, formState: {errors}} = useForm();

    async function handleFormSubmit(data) {
        try{
            const result = await axios.post("http://localhost:8080/foodkeeper/signup", {
                email: data.email,
                username: data.username,
                password: data.password,
            });
        }catch (e) {
            console.error(e);
        }
        setLoginOpen(true);
        setRegisterOpen(false);
    }

    return(
        <div className="inner-container">

            <form className="box" onSubmit={handleSubmit(handleFormSubmit)}>

                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        className="login-input"
                        type="text"
                        id="username"
                        placeholder="Your username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "This is required to sign up"
                            },
                            minLength: {
                                value: 3,
                                message: "Your username must me 3 characters long"
                            }
                        })}
                    />
                    { errors.username && <p className="errors">{errors.username.message}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="emailadress">Email:</label>
                    <input
                        className="login-input"
                        type="email"
                        id="emailadress"
                        placeholder="Your email-adress"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "This is required to sign up"
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Please enter a valid e-mail adress"
                            },
                        })}
                    />
                    { errors.email && <p className="errors">{errors.email.message}</p> }
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="login-input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "This is required to sign up"
                            },
                            minLength: {
                                value: 8,
                                message: "Your password need to be 8 characters long"
                            }
                        })}
                    />
                    { errors.password && <p className="errors">{errors.password.message}</p> }
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