import React, {useEffect, useState} from 'react';
import signupImage from "../../assets/images/jobPost.png";
import Illustration from "../Illustration";
import {Rating} from "@smastrom/react-rating";
import Dashboard from "../Dashboard";
import TextInput from "../TextInput";
import {Col, Container, Form, Row} from "react-bootstrap";
import useGetAgreement from "../../hooks/useGetAgreement";
import {useParams} from "react-router-dom";
import axios from "axios";
import Button from "../Button";

const PostDetails = () => {
    const {loading,error,agreementData} = useGetAgreement()
    const [review, setReview] = useState("");
    const [rating, setRating] = useState({rating: 3});

    const [dataById, setDataById] = useState({});
    const { id } = useParams();
    const apiUrl = `http://35.174.107.106:3000/agreement/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setDataById(response.data);
                console.log("response.data")
                console.log(dataById)

            } catch (error) {
                console.error('Error fetching agreement data:', error);
            }
        };

        fetchData();
    }, []);

    function ratingHandle(selectedValue) {

        // alert(selectedValue)
        setRating((rating) => ({
            ...rating,
            rating: selectedValue
        }));
    }
    return (
        <>
        <Container>
            <Row>
                <Col sm={4}><Illustration src={signupImage}/></Col>
                <Col sm={8}>
                        <h2>{dataById.title}</h2>
                        <p>{dataById.description}</p>
                    <Row>
                        <Col><p>Valid From : {printDate(dataById.jobStartDate)}</p></Col>
                        <Col><p>Valid Till : {printDate(dataById.jobEndDate)}</p></Col>
                        <Col><p>TeamDeadLine: {printDate(dataById.endContractDate)}</p></Col>
                    </Row>
                    <p>Skills : {dataById.skill}</p>
                    <p>Materials: {dataById.materialGroup}</p>

                    <Form>
                        <Row>
                            <Col>
                                <Rating
                                    style={{ maxWidth: 150 ,marginBottom: "20px" }}
                                    onChange={ratingHandle} value={rating.rating}
                                />
                            </Col>
                            <Col xs={8}>
                                <TextInput
                                    type="text"
                                    placeholder="Enter a review"
                                    value={review}
                                    onChange={(e)=> setReview(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Button >Submit</Button>
                            </Col>

                        </Row>
                    </Form>

                        <br/>
                        <p>Reviews: This is best provider</p>

                </Col>
            </Row>


        </Container>
            <Dashboard/>
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