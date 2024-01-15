import React, {useState} from 'react';
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";
import {Link, useHistory} from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import {Container} from "react-bootstrap";

const LoginForm = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const { login ,error, } = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
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
        }finally {
            // Set loading back to false, whether the request was successful or not
            setLoading(false);
        }
    };

    return (
        <Container>
            {loading ? null : (
        <Form  style={{ height: "330px" , marginTop:"100px" }} onSubmit={handleLogin}>
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


            {loading ? null : (
                <Button type="submit">Sign In</Button>
            )}
            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/signup">Sign Up</Link> instead.
            </div>
        </Form>
            )}
            {loading &&(<div ><Loading type="spokes" color="#00f7ff" height={'20%'} width={'20%'}/> </div>)}
        </Container>

    );
};

export default LoginForm;