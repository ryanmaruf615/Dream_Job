import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Form from "./Form";
import {useAuth} from "../AuthContex/AuthContex";

const SignupForm = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [agree,setAgree] = useState("");
    const [error,setError] = useState();
    const [loding,setLoading] = useState();

    const history = useHistory()

    const {signup} =useAuth()

    async function handleSubmit(e){
        e.preventDefault()
        if(password !== confirmPassword){
            return setError("Password don't Match");
        }
        try{
            setError("");
            setLoading(true)
            await signup(email,password,username);
            history.push("/");
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to Signup")
        }

    }

    return (
        <Form style = {{height: '500px'}} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
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

            <Button disabled={loding} type = "submit">
                Submit Now
            </Button>

            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <a href="login.html">Login</a> instead.
            </div>
        </Form>
    );
};

export default SignupForm;