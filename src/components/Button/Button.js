import React from "react";
import "./Style/Button.scss"


const Button = ({name, onClick}) => {
    return (
        <div>
            <button className="sign-in-button" onClick={onClick}>
                {name}
            </button>
        </div>
    );
}
export default Button;

