import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Link } from "react-router";
const Header = () => {
  // let btnLogin = "login";

  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-100">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 ">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 ">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="px-4 ">
            <Link to="/grocery">GROCERY</Link>
          </li>

          <li className="px-4 font-bold cur">
            <Link to="/cart">CART ({cartItems.length} item)</Link> 
          </li>

          <button
            className="login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
              // console.log(btnLogin);
            }}
          >
            {btnLogin}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
