import {Link} from "react-router-dom";
import classes from "../styles/Account.module.css";
import {useAuth} from "../AuthContex/AuthContex";


export default function Account(){

    const {currentUser , logout} = useAuth();
    return(
        <div className={classes.account}>
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">account_circle</span>
                    <span style = {{fontWeight: 'bold' , fontSize: '20px' }} >{currentUser.displayName}</span>
                    <Link className={classes.button} to="/masterAgrement">Create Master Agreement</Link>
                    <Link className={classes.button} to="/marterialGroup">Create Material Group</Link>
                    <Link className={classes.button} to="/createprovider">Create Provider</Link>
                    <Link className={classes.button} to="/aboutus">About Us</Link>
                    <span
                        className="material-icons-outlined"
                        title="Logout"
                        onClick={logout}
                    > {""} logout {""}
                    </span>
                </>
            ) : (
                < >

                    <Link style = {{fontWeight: 'bold'  }} to="/signup">Signup</Link>
                    <Link style = {{fontWeight: 'bold'}} to="/login">Login</Link>
                    <Link style = {{fontWeight: 'bold'}} to="/aboutus">About Us</Link>
                </>
            )}
        </div>
    );

}