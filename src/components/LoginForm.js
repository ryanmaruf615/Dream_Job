import React, {useState} from 'react';
import classes from "../styles/Signup.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";
import {useHistory} from "react-router-dom";
//import {useAuth} from "../AuthContex/AuthContex";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
 import useAuth from "../hooks/useAuth";

const LoginForm = () => {

    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState();
    const history = useHistory();
    const [userData,setUserData] = useState([]);

    const { user, isAuthenticated,login } = useAuth();
    // const {login} =useAuth();
    // async function handleSubmit2(e){
    //     e.preventDefault()
    //     try{
    //         setError("");
    //         setLoading(true)
    //         await login(email,password);
    //         history.push("/")
    //     }
    //     catch (err) {
    //         console.log(err);
    //         setLoading(false);
    //         setError("Failed to Login")
    //     }
    //
    // }

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     // Create an object with the form data
    //     const formData = {
    //         username: username,
    //         password: password,
    //     };
    //
    //     // Set loading to true to indicate that the request is being sent
    //     setLoading(true);
    //
    //     try {
    //         // Send a POST request using Axios
    //         const response = await axios.post('https://codexauth.onrender.com/api/login/', formData, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         history.push("/")
    //         setUserData(response.data)
    //         // Handle the response here (you can log it or perform other actions)
    //         console.log("response after log in",userData);
    //
    //         // Reset the form and loading state after successful submission
    //         setPassword('');
    //         setUsername('');
    //
    //     } catch (error) {
    //         // Handle errors here (e.g., show an error message)
    //         ErrorMessage();
    //         console.error('Error submitting form:', error);
    //
    //     } finally {
    //         // Set loading back to false, whether the request was successful or not
    //         setLoading(false);
    //
    //     }
    // }

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            console.log('Login init');
            const userData = await login(username, password);
            console.log('Login successful', userData);
            history.push("/");
            window.location.reload();
        } catch (error) {
            ErrorMessage();
            console.error('Login failed', error);
        }
        // history.push("/");
    };

    return (
        <Form  style={{ height: "330px" , marginTop:"150px"}} onSubmit={handleLogin}>
            <TextInput
                type="text"
                placeholder="Enter username"
                icon="person"
                required
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter Password"
                icon="lock"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <Button disabled={loading} type = "button">Sign In</Button>
            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <a href="login.html">Sign Up</a> instead.
            </div>
        </Form>
    );
};

export default LoginForm;