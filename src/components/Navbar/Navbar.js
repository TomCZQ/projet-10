import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import "./Style/navbar.scss";
import { logOutUser } from "../../redux/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.user);

  const handleSignout = () => {
    dispatch(logOutUser());
  };

  return token ? (
    <div className="navbar-container">
      <div className="main-nav-item" href="#">
        <FontAwesomeIcon icon={faUserCircle} />
        <p>{user.userName ? user.userName : user.firstName}</p>
      </div>
      <div className="main-nav-item" onClick={handleSignout}>
        <FontAwesomeIcon icon={faSignOut} />
        <p>Sign Out</p>
      </div>
    </div>
  ) : (
    <div>
      <p className="main-nav-item" onClick={() => navigate("/signin")}>
        <FontAwesomeIcon icon={faUserCircle} />
        Sign In
      </p>
    </div>
  );
};

export default Navbar;
