import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const user = useSelector((state => state.user))
    console.log(user)

    const userName = useSelector((state => state.user.user.userName))
    console.log(userName)


    const handleSignout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        token ?
        <div className="navbar-container">
            <p className="main-nav-item" href="#" >
                <FontAwesomeIcon icon={faUserCircle} />
                "{userName}
            </p>
            <p className="main-nav-item" onClick={handleSignout}>
                <FontAwesomeIcon icon={faSignOut} />
                Sign Out
            </p>
        </div>
        :
        <div>
            <p className="main-nav-item" onClick ={() => navigate("/signin")} >
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </p>
        </div>
        

    );
}

export default Navbar;
