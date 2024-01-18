import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Form from "./Form";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const SignupForm = () => {
    const [username,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [agree,setAgree] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const [userData,setUserData] = useState([]);
    const history = useHistory()

    async function handleSubmitSignup(e) {
        e.preventDefault();
        if(password !== confirmPassword){
            return setError("Password don't Match");
        }

        // Create an object with the form data
        const formData = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password,
        };

        // Set loading to true to indicate that the request is being sent
        setLoading(true);

        try {
            // Send a POST request using Axios
            const response = await axios.post('https://codexauth.onrender.com/api/register/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setUserData(response.data)
            // Handle the response here (you can log it or perform other actions)
            SuccessMessage({ title: 'Saved successfully' });
            console.log("response",userData);
            history.push("/login");
        } catch (error) {
            // Handle errors here (e.g., show an error message)
            ErrorMessage();
            console.error('Error submitting form:', error);

        } finally {
            // Set loading back to false, whether the request was successful or not
            setLoading(false);

        }
    }

    return (
        <Form style = {{height: '500px'}} onSubmit={handleSubmitSignup}>
            <TextInput
                type="text"
                placeholder="Enter First Name"
                icon="person"
                required
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
            />
            <TextInput
            type="text"
            placeholder="Enter Last Name"
            icon="person"
            required
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
        />
            <TextInput
                type="text"
                placeholder="Enter user Name"
                icon="person"
                required
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />

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

            <TextInput
                type="password"
                placeholder="Confirm Password"
                icon="lock_clock"
                required
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
            />

            <CheckBox
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                required
                onChange={(e)=> setAgree(e.target.value)}
            />
            {loading &&(<div ><Loading type="spokes" color="#00f7ff" height={'20%'} width={'20%'}/> </div>)}

            {loading ? null : (
                <Button type="submit">Submit</Button>
            )}
            {error && <p className="error">{error}</p>}

            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignupForm;