import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
    // let btnLogin = "login";

    const [btnLogin,setBtnLogin] = useState("login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">HOME</Link>
              </li>
            <li>
              <Link to="/about">ABOUT US</Link>
              </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
              </li>
            <li>CART</li>
            <button className="login" onClick={()=>{
                btnLogin === "login" ?setBtnLogin("logout"):setBtnLogin("login");
                console.log(btnLogin);
            }}>
                {btnLogin}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  