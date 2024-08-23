import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/Button/Button"
import "./Style/sign-in.scss"
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../redux/actions";
import { useDispatch } from "react-redux";



const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe]= useState(false)

    const navigate = useNavigate();


    const handleSignIn = (e) => {
        e.preventDefault();
        const body = {email, password, rememberMe}
        console.log(body);
        loginUser(body, dispatch);
        navigate("/user")
    };
    



    return (
        <div className="main">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>

                    <div className="input-wrapper">
                        <label for="email" >Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input  id="password" value={password} onChange={(e) => setPassword(e.target.value)} />                    
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" value={rememberMe} onChange={() => setRememberMe(!rememberMe)}></input>
                        <label for="remember-me" >Remember me</label>
                    </div>
                    <Button name= "Sign In" />
                </form>
            </section>
        </div>
    );
}

export default SignIn;

