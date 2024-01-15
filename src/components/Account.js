import {Link, useHistory} from "react-router-dom";
import classes from "../styles/Account.module.css";
import useAuth from '../hooks/useAuth';
import TopCarousel from "./Carosel";
import Posts from "./Posts";



export default function Account(){
    const { getUser, isAuthenticated } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        try {
             localStorage.clear();
             // ("authToken")
            // history.push("/")
            window.location.reload();
            console.log('Logout successful');

        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return(
        <div className={classes.account}>

            {isAuthenticated() ? (

                    <>

                        <span className="material-icons-outlined" title="Account">account_circle</span>
                        <span style = {{fontWeight: 'bold' , fontSize: '20px' }} >{getUser()}</span>
                        <Link className={classes.button} to="/masterAgrement">Create Master Agreement</Link>
                        <Link className={classes.button} to="/marterialGroup">Create Material Group</Link>
                        <Link className={classes.button} to="/createprovider">Create Provider</Link>
                        <Link className={classes.button} to="/aboutus">About Us</Link>
                        <button onClick={handleLogout}>Logout</button>
                        

                    </>

            ) : (
                < >
                    <Link style = {{fontWeight: 'bold'}} to="/login">Login</Link>
                    <Link style = {{fontWeight: 'bold'  }} to="/signup">Signup</Link>
                    <Link style = {{fontWeight: 'bold'}} to="/aboutus">About Us</Link>
                </>

            )}







        </div>
    );

}