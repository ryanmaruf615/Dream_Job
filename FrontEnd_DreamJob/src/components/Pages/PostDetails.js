import React, {useEffect, useState} from 'react';
import signupImage from "../../assets/images/jobPost.png";
import Illustration from "../Illustration";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";



const PostDetails = () => {
    const history = useHistory()
    const [comment, setComment] = useState("");
    const [review, setReview] = useState(0)
    const [loading, setLoading] = useState(0)
    const [dataById, setDataById] = useState({});
    const [dataBySkill, setDataBySkill] = useState([]);
    const { id } = useParams();
    const apiUrl = `https://dg4gi3uw0m2xs.cloudfront.net`;



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl+"/agreement/"+id).then(async function (dataById) {
                    setDataById(dataById.data);
                    const response2 = await axios.get(apiUrl+"/agreement?row=100&skill="+dataById.data.skill);
                    setDataBySkill(response2.data);
                });

            } catch (error) {
                console.error('Error fetching agreement data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                    const response2 = await axios.get(apiUrl+"/agreement?row=100&skill="+dataById.data.skill);
                    setDataBySkill(response2.data);
            } catch (error) {
                console.error('Error fetching agreement data:', error);
            }
        };

        fetchData2();
    }, []);

    async function handleSubmit(e)
    {
        e.preventDefault();
        const formData = {
            review:review,
            comment:"good",
        }
        try {
            // Send a POST request using Axios
            const response = await axios.post(apiUrl+"/agreement/"+id+"/review", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            SuccessMessage({ title: 'Saved successfully' });
        } catch (error) {
            ErrorMessage();
            console.error('Error submitting form:', error);
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col sm={4}><Illustration src={signupImage}/></Col>
                    <Col sm={8}>
                        <h2>{dataById.title}</h2>
                        <p>{dataById.description}</p>
                        <p>Role: {dataById.role}</p>
                        <p>Skills : {dataById.skill}</p>
                        <p>Materials: {dataById.materialGroup}</p>
                        <Row>
                            <Col><p>Valid From : {printDate(dataById.jobStartDate)}</p></Col>
                            <Col><p>Valid Till : {printDate(dataById.jobEndDate)}</p></Col>
                            <Col><p>TeamDeadLine: {printDate(dataById.endContractDate)}</p></Col>
                        </Row>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Rating style={{ maxWidth: 300 }} value={review} onChange={setReview}  />
                                <Col className="mt-2">
                                    {loading ? null : (
                                        <Button  type="submit">Submit</Button>
                                    )}
                                </Col>
                            </Row>
                        </Form>
                        <br/>
                    </Col>
                </Row>

                <div >
                    <h1 className="text-center"> Related Jobs </h1>

                    <Table responsive="xl">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Role</th>
                            <th>Skills</th>
                            <th>Technology Level</th>
                            <th>Salary</th>
                            <th>cycle</th>
                        </tr>
                        </thead>
                        <tbody>

                        {dataBySkill.map((job) => {

                            return <tr className="table-row" key={job.id} onClick={() => {
                                history.push("/postDetails/" + job.id);
                                window.location.reload();

                            }}>
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>{job.role}</td>
                                <td>{job.skill}</td>
                                <td>{job.technologyLevel}</td>
                                <td>{job.salary}</td>
                                <td>{job.cycle}</td>
                            </tr>
                        })}


                        </tbody>
                    </Table>
                </div>
            </Container>

        </>
    );
};

export default PostDetails;

function printDate(date){
    try{
        return new Intl.DateTimeFormat(['ban', 'id']).format(new Date(date));
    }
    catch (exc){
        return date;
    }
}