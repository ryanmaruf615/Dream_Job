import {Link} from "react-router-dom";
import classes from "../styles/Account.module.css";
import useAuth from '../hooks/useAuth';



export default function Account(){
    const { userNameRes,getUser, isAuthenticated } = useAuth();
    const handleLogout = async () => {
        try {
             localStorage.clear();
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
                        <Link to="/" style = {{fontWeight: 'bold' , fontSize: '20px' }} >{getUser()}</Link>
                        <Link className={classes.button} to="/masterAgrement">Create Master Agreement</Link>
                        <Link className={classes.button} to="/marterialGroup">Create Material Group</Link>
                        <Link className={classes.button} to="/createprovider">Create Provider</Link>
                        <Link className={classes.button} to="/aboutus">About Us</Link>
                        <span className="material-icons-outlined" title="Logout" onClick={handleLogout}> logout </span>
                    </>
            ) : (
                <>
                    <Link style = {{fontWeight: 'bold'}} to="/login">Login</Link>
                    <Link style = {{fontWeight: 'bold'  }} to="/signup">Signup</Link>
                    <Link style = {{fontWeight: 'bold'}} to="/aboutus">About Us</Link>
                </>
            )}
        </div>
    );

}