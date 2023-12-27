import Nav from "./NavBar";
import classes from "../styles/Layout.module.css";
import Footer from "./Footer";
export default function Layout({children}){
    return(
        <>
        <div>
            <Nav/>
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </div>
            <Footer/>
        </>
    );
};