import Posts from "../Posts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TopCarousel from "../Carosel";
import useAuth from '../../hooks/useAuth';


const Home = () => {
    const { user, isAuthenticated } = useAuth();
    return (
        <>
            {isAuthenticated() ? (
                <Posts/>
            ) : (
                <div className="text-center">
                    <TopCarousel/>
                    <br/>
                    <h2 style={{color:"red"}}>Congratulations!!! </h2>
                    <h5 style={{color:"blue"}} >
                        You are in the right place; you are very close to your dream job.
                    </h5>
                    <h5 style={{color:"blue"}}>We are providing you a very smooth gateway to reach your Fantasy Job in Frankfurt.</h5>
                </div>

            )}

        </>
    );
};

export default Home;