import React from "react";
import "./Header.css";
import header_logo from "./logo/header_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={header_logo} alt="header logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello User</span>
          <span className="header__optionTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Returrns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">You'r</span>
          <span className="header__optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
