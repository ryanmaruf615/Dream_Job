import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from "../styles/footer.module.css";

const Footer = () => {
    return (
            <footer className={classes.footer}>
                <Container className="text-light py-4">
                    <Row className="mt-3">
                        <Col md={4}>
                            <h5>Contact Us</h5>
                            <p>Nibelungenpl. 1, 60318 Frankfurt am Main</p>
                            <p>Email: info@frankfurt-dreamjobs.de</p>
                            <p>Phone: +49 - 10001000</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <p>&copy; 2024 Dream Jobs. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    );
};

export default Footer;
