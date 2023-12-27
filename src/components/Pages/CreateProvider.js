import React, {useState} from 'react';
import TextInput from "../TextInput";
import classes from '../../styles/Signup.module.css';
import {Col, Form, Row} from "react-bootstrap";
import Button from "../Button";
import DatePicker from "react-datepicker";


import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const CreateProvider = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [rule, setRule] = useState("");
    const [contactName, setContactName] = useState("");
    const [masterAgreementType, setMasterAgreementType] = useState("");
    const [existSince, setExistSince] = useState(new Date());
    const [validFrom, setValidFrom] = useState(new Date());
    const [validUntil, setValidUntil] = useState(new Date());
    const [loading, setLoading] = useState();


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(validUntil);
        alert(validUntil);

    }


        return (
            <div>
                <h1 className="text-center">Create A provider</h1>
                <div className={classes.formContent}>
                    <Form className={classes.signup} onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            placeholder="Provider Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /><br/>
                        <TextInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        /><br/>
                        <TextInput
                            type="text"
                            placeholder="Provider Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        /><br/>
                        <TextInput
                            type="text"
                            placeholder="Provider Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        /><br/>
                        <TextInput
                            type="text"
                            placeholder="Contact Person Name "
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                        <Row className="mt-2 mb-3">
                            <Col>
                                <TextInput
                                    type="text"
                                    placeholder="Master Agreement Type "
                                    value={masterAgreementType}
                                    onChange={(e) => setMasterAgreementType(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <TextInput
                                    type="text"
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
                            />
                            </Col>


                        </Row>

                        <Row className="mt-2 mb-2">
                            <Col>
                                <h6>Valid from</h6>
                                <DatePicker
                                    selected={validFrom}
                                    onChange={(date) => setValidFrom(date)}
                                />
                            </Col>
                            <Col>
                                <h6>Valid until</h6>
                                <DatePicker
                                    selected={validUntil}
                                    onChange={(date) => setValidUntil(date)}/><br/>
                            </Col>

                        </Row>

                        <Col md={{span: 4, offset: 4}}>
                            <Button disabled={loading} type="submit">Submit Now</Button>
                        </Col>
                    </Form>
                </div>
            </div>
        );
}

export default CreateProvider;