import Illustration from "./Illustration";
import signupImage from '../assets/images/signup.svg';
import SignupForm from "./SignupForm";


const Signup = () => {
    return (
        <>
            <h1>Create an Account</h1>
            <div className="column">
                <Illustration src={signupImage}/>
                <SignupForm/>
            </div>
        </>
    );
};

export default Signup;