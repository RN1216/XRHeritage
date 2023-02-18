import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/allservices">Services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/reviews">All Reviews</Link>
      </li>
      <li className="font-semibold">
        <Link to="/myallreview">My Reviews</Link>
      </li>
      <li className="font-semibold">
        <Link to="/about">About</Link>
      </li>

      {user?.email ? (
        <>
         
          <li className="font-semibold">
            
            <button onClick={handleLogOut} className="btn-ghost">
              {" "}
              Sign Out
            </button>
            <span className="mx-auto"> {user?.displayName} </span>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/register">Sign Up</Link>
          </li>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

      {user?.photoURL ? (
        <div className="avatar online">
          <div className="h-10 w-10 rounded-full">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      ) : (
        <FaUserAlt className="my-5 w-10 text-black"></FaUserAlt>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-10 my-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className=" text-xl my-5 pl-10">
         
          <p className="font-bold text-blue-400">shifty</p>
          <p className="font-bold ">WORKERS</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      
    </div>
  );
};

export default Header;
