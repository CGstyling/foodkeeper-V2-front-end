import {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId")
        console.log(token);
        console.log(userId);
        if(token && userId) {
            fetchUserData(token, userId );
        } else {
            toggleIsAuth({
                ...isAuth,
                status: "done",
            });
        }
    }, [])

    function signIn(JWT, userData) {
        localStorage.setItem("token", JWT);
        localStorage.setItem("userId", userData.userId);
        console.log(userData);
        const userId = userData.userId;
        console.log(userId);
        fetchUserData(JWT, userId);
    }

    async function fetchUserData(token, userId) {
        try {
            const result = await axios.get(`http://localhost:8080/foodkeeper/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result)
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: userId,
                },
                status: "done",
            });
            history.push("/");

        } catch (e) {
            console.error(e);

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }

    function signOut() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        })
        history.push("/welcome")
        console.log("Gebruiker is uitgelogd")
    }

    const data = {
        isAuthenticated: isAuth.isAuth,
        user: isAuth.user,
        signInFunction: signIn,
        signOutFunction: signOut,
    }

    return(
        <AuthContext.Provider value={data}>
            {isAuth.status === "done" ? children : <p>loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;