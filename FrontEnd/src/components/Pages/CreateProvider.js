import React, {useState} from 'react';
import TextInput from "../TextInput";
import classes from '../../styles/Signup.module.css';
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "../Button";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from "axios";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from '../ErrorMessage';
import Loading from "../Loading";
import {useHistory} from "react-router-dom";

const CreateProvider = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [rule, setRule] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [contactName, setContactName] = useState("");
    const [masterAgreementType, setMasterAgreementType] = useState("");
    const [existSince, setExistSince] = useState(new Date());
    const [validFrom, setValidFrom] = useState(new Date());
    const [validUntil, setValidUntil] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const today = new Date();
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            name:name,
            address:address,
            phone:phone,
            rule:rule,
            role:role,
            email:email,
            contactName:contactName,
            masterAgreementType:masterAgreementType,
            existSince:existSince,
            validFrom:validFrom,
            validUntil:validUntil,
        };

        // Set loading to true to indicate that the request is being sent
        setLoading(true);

        try {
            // Send a POST request using Axios
            const response = await axios.post('https://dg4gi3uw0m2xs.cloudfront.net/provider/create', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            SuccessMessage({ title: 'Saved successfully' });
            console.log(response.data);
            history.push("/");
        } catch (error) {
            ErrorMessage();
            console.error('Error submitting form:', error);
        } finally {
            // Set loading back to false, whether the request was successful or not
            setLoading(false);
        }
    }

        return (
            <Container>
                <h1 className="text-center">Create A provider</h1>
                <div className={classes.formContent}>
                    <Form className={classes.signup} onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            required
                            placeholder="Provider Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /><br/>
                        <TextInput
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        /><br/>
                        <TextInput
                            type="text"
                            required
                            placeholder="Provider Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        /><br/>
                        <TextInput
                            type="text"
                            required
                            placeholder="Provider Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <Row className="mt-2 mb-3">
                            <Col>
                                <TextInput
                                    type="text"
                                    required
                                    placeholder="Contact Person Name "
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <TextInput
                                    type="text"
                                    required
                                    placeholder="Rule "
                                    value={rule}
                                    onChange={(e) => setRule(e.target.value)}
                                />
                            </Col>

                        </Row>

                        <Row className="mt-2 mb-3">
                            <Col>
                                <TextInput
                                    type="text"
                                    required
                                    placeholder="Master Agreement Type "
                                    value={masterAgreementType}
                                    onChange={(e) => setMasterAgreementType(e.target.value)}
                                />
                            </Col>
                            {loading &&(<div ><Loading type="spokes" color="#00f7ff" /> </div>)}
                            <Col>
                                <TextInput
                                    type="text"
                                    required
                                    placeholder="Role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <h6>Exists since</h6> <DatePicker
                                selected={existSince}
                                onChange={(date) => setExistSince(date)}
                                minDate={today}
                            />
                            </Col>
                        </Row>

                        <Row className="mt-2 mb-2">
                            <Col>
                                <h6>Valid from</h6>
                                <DatePicker
                                    selected={validFrom}
                                    onChange={(date) => setValidFrom(date)}
                                    minDate={today}
                                />
                            </Col>
                            <Col>
                                <h6>Valid until</h6>
                                <DatePicker
                                    selected={validUntil}
                                    onChange={(date) => setValidUntil(date)}
                                    minDate={today}
                                /><br/>

                            </Col>
                        </Row>
                        <Col md={{span: 4, offset: 4}}>
                            {loading ? null : (
                                <Button type="submit">Submit</Button>
                            )}
                        </Col>

                    </Form>
                </div>
            </Container>
        );
}

export default CreateProvider;