import React, {useContext} from "react";
import "./Header.css";
import logoGroot from "../../Assets/logo-groot.png"
import {useHistory, Link} from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext";

function Header() {
    const history = useHistory();
    const {signOutFunction} = useContext(AuthContext);

    return (
        <nav className="header-home">

            <Link to="/">
                <span className="logo-container">
                      <img src={logoGroot} alt="logo"/>
                </span>
            </Link>

            <span className="header-buttons">
             <button
                 className="header-button-plus"
                 type="button"
                 onClick={() => history.push("/add-recipe")}
             >

            </button>

            <button
                className="header-bn"
                type="button"
                onClick={() => history.push("/profile")}
            >
                Profile
            </button>

                <button
                    className="header-bn"
                    type="button"
                    onClick={signOutFunction}
                >
                    Log out
                </button>

            </span>

        </nav>
    );
}

export default Header;