import loginImage from "../assets/images/login.svg";
import Illustration from "./Illustration";
import LoginForm from "./LoginForm";
import {Col, Container, Row} from "react-bootstrap";


const Login = () => {
    return (
        <Container>
            <h1>Log in to Your Account</h1>
            <Row>
                <Col>
                    <Illustration src={loginImage}/>
                </Col>
                <Col>
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;