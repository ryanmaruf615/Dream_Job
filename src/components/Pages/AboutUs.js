import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import classes from '../../styles/AboutUs.module.css';

const teamMembers = [
    {
        id: 1,
        name: 'Md Maruf',
        role: 'Founder & CEO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis euismod, ',
    },
    {
        id: 2,
        name: 'Jamal Uddin',
        role: 'CTO',
        bio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        id: 3,
        name: 'Tonni ',
        role: 'CTO',
        bio: '11 hajar euro.',
    },
    {
        id: 4,
        name: 'Sabah',
        role: 'Artist',
        bio: ' Sabah sundor manus.',
    },
    {
        id: 5,
        name: 'Imon',
        role: 'CTO',
        bio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },

    // Add more team members as needed
];

const AboutUs = () => {
    return (
        <Container className={classes.aboutUsPage}>
            <div>
                <h4>
                    Greetings, Job Seekers,
                </h4>
                    <p>
                        Embark on a journey towards professional success with "Dream Career Frankfurt,"
                        your premier destination for navigating the thriving job market in this dynamic city.
                        We understand that finding the right career path can be both exciting and challenging,
                        and that's why we're here to guide you every step of the way.
                    </p>
                    <p>Regards,</p>
                    <p>Chairman, Dream Career Frankfurt</p>

            </div>
                <div>
                    <h1 className="text-center">About Team Members </h1></div>
            <Row>
                {teamMembers.map((member) => (
                    <Col key={member.id} lg={4} md={6} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.bio}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutUs;
