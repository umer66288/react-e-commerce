import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Nav = (props) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartContext();
  const loadBar = () => {
    setMenuIcon(false)
    props.setProgress(100)
  }
  return (
    <NaV>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={loadBar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={loadBar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={loadBar}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={loadBar}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={loadBar}>
              <FiShoppingCart className="cart-trolley" />
              {total_item <= 0 ? null : <span className="cart-total--item"> {total_item} </span>}
            </NavLink>
          </li>
        </ul>
        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NaV>
  );
};
const NaV = styled.nav`
.navbar-lists {
  display: flex;
  gap: 3.2rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 400;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.2s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
  .active{
    color: ${({ theme }) => theme.colors.helper}!important;
  }
}
.mobile-navbar-btn {
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
}
.mobile-nav-icon[name="close-outline"] {
  display: none;
}
.close-outline {
  display: none;
}
.cart-trolley--link {
  position: relative;
  .cart-trolley {
    position: relative;
    font-size: 2.6rem;
  }
  .cart-total--item {
    font-size: 13px;
    width: 2.1rem;
    height: 2.1rem;
    position: absolute;
    top: -20%;
    left: 70%;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.helper};
  }
}
.user-login--name {
  text-transform: capitalize;
}
.user-logout,
.user-login {
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mobile-navbar-btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.black};
    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .active .mobile-nav-icon {
    display: none;
    font-size: 4.2rem;
    position: absolute;
    top: 30%;
    right: 10%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }
  .active .close-outline {
    display: inline-block;
  }
  .navbar-lists {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    /* transform-origin: top; */
    transition: all 0.2s linear;
  }

  .active .navbar-lists {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 3s linear ease-in-out;
    .navbar-link {
      font-size: 3.5rem;
    }
  }
  .cart-trolley--link {
    position: relative;
    .cart-trolley {
      position: relative;
      font-size: 5rem;
    }
    .cart-total--item {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.5rem;
    }
  }

  .user-logout,
  .user-login {
    font-size: 2.2rem;
    padding: 0.8rem 1.4rem;
  }
}
`;
export default Nav;