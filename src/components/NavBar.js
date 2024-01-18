import classes from "../styles/Nav.module.css";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo1234.jpg";
import Account from "./Account";


function NavBar() {

    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/" className={classes.brand}>
                            <img src={logo} alt="Learn with Sumit Logo" />
                            <h3> Dream Job Frankfurt</h3>
                        </Link>
                    </li>
                </ul>
                <Account/>
            </nav>
        </>
    );
}

export default NavBar;