import Carousel from 'react-bootstrap/Carousel';
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import classes from "../styles/Carousel.css";
function TopCarousel() {
    return (
        <div>
        <Carousel data-bs-theme="dark" className={classes.carousel}>
            <Carousel.Item>
                <img
                    className="d-block w-25"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-25"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-25"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default TopCarousel;