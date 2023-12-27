import React, {useState} from 'react';
import classes from "../styles/Signup.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";
import {useHistory} from "react-router-dom";
import {useAuth} from "../AuthContex/AuthContex";

const LoginForm = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState();
    const history = useHistory();
    const {login} =useAuth();
    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError("");
            setLoading(true)
            await login(email,password);
            history.push("/")
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to Login")
        }

    }

    return (
        <Form  style={{ height: "330px" , marginTop:"150px"}} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter Email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter Password"
                icon="lock"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <Button disabled={loading} type = "submit">Sign In</Button>
            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <a href="login.html">Sign Up</a> instead.
            </div>
        </Form>
    );
};

export default LoginForm;