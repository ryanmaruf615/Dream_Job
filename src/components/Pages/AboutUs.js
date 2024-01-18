import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import classes from '../../styles/AboutUs.module.css';

const teamMembers = [
    {
        id: 1,
        name: 'Imon Bhuyan',
        title: 'Director, Technical',
        iD: 2024001,
        contact: 'md.bhuiya@stud.fra-uas.de'
    },
    {
        id: 2,
        name: 'Md Maruf Hossain',
        title: 'Director, Technical',
        iD: '2024002',
        contact: 'maruf.hossain@stud.fra-uas.de',
    },
    {
        id: 3,
        name: 'Mousumi Tonni',
        title: 'Director, Marketing',
        iD: '2024003',
        contact: 'mousumi.tonny@stud.fra-uas.de',
    },
    {
        id: 2,
        name: 'Sadia Sabah',
        title: 'Director, Brand',
        iD: '2024004',
        contact: 'aktari.sabah2@stud.fra-uas.de',
    },
    {
        id: 2,
        name: 'Jamal Uddin',
        title: 'Owner,Director, Operations ',
        iD: '2024005',
        contact: 'md.uddin2@stud.fra-uas.de',
    },
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
                                <Card.Subtitle >{member.title}</Card.Subtitle>
                                <Card.Subtitle>{member.iD}</Card.Subtitle>
                                <Card.Text>{member.contact}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutUs;
