import React from 'react';
import loginImage from "../assets/images/login.svg";
import Illustration from "./Illustration";
import LoginForm from "./LoginForm";


const Login = () => {
    return (
        <>
            <h1>Log in to Your Account</h1>
            <div className="column">
                <Illustration src={loginImage}/>
                <LoginForm/>

            </div>
        </>
    );
};

export default Login;