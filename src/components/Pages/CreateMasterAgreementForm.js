import React, {useState} from 'react';
import TextInput from "../TextInput";
import SelectBox from "../SelectBox";
import classes from '../../styles/Signup.module.css';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "../Button";
import DateTimePicker from "../DateTimePicker";
import DatePicker from "react-datepicker";
import axios from "axios";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from '../ErrorMessage';
import Loading from "../Loading";
import {useHistory} from "react-router-dom";



const CreateMasterAgreementForm = () => {


    const [selectedValue, setSelectedValue] = useState('');
    const [title, setJobTitle] = useState('');
    const [providerName, setProviderName] = useState('');
    const [position, setPosition] = useState('');

    const [providerEmail, setProviderEmail] = useState('');
    const [technologyLevel, setTechnologyLevel] = useState('');
    const [role, setRole] = useState('');
    const [team, setTeam] = useState('');

    const [skill, setSkill] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [loading,setLoading] = useState(false);

    //Date picker States
    const [jobStartDate, setJobStartDate] = useState(new Date());
    const [jobEndDate, setEndDate] = useState(new Date());
    const [startContractDate, setStartContractDate] = useState(new Date());
    const [endContractDate, setEndContractDate] = useState(new Date());
    const today = new Date();
    const history = useHistory()

    // values for the select box
    const selectOptions = [
        { value: 'Networking Hardware', label: 'Networking Hardware' },
        { value: 'Computer Hardware', label: 'Computer Hardware' },
        { value: 'Software', label: 'Software' },
    ];


    async function handleSubmit(e) {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            userId:77, //have to remove
            title:title,
            position:position,
            description:description,
            salary:salary,
            providerName:providerName,
            providerEmail:providerEmail,
            technologyLevel:technologyLevel,
            role:role,
            skill:skill,
            teamMember:team,
            materialGroup:selectedValue,
            jobStartDate:jobStartDate,
            jobEndDate:jobEndDate,
            startContractDate:startContractDate,
            endContractDate:endContractDate,
        };

        // Set loading to true to indicate that the request is being sent
        setLoading(true);
        try {
            // Send a POST request using Axios
            const response = await axios.post('https://dg4gi3uw0m2xs.cloudfront.net/agreement', formData, {
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
        <>
            <h1 className="text-center">Create A Master Agreement</h1>
        <Container className={classes.formContent}>
             <Form className = {classes.signup} onSubmit={handleSubmit}>
                 <Row className="mb-2">
                     <Col>
                             <TextInput
                                 required
                                 type="text"
                                 placeholder="Enter Job Title"
                                 icon=""
                                 value={title}
                                 onChange={(e)=> setJobTitle(e.target.value)}
                             />
                     </Col>
                 </Row>
                 <Row className="mb-2">
                     <Col>
                         <TextInput
                             required
                             label="Enter the description "
                             type="text"
                             placeholder="Enter Job Position"
                             value={position}
                             onChange={(e)=> setPosition(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             required
                             type="text"
                             placeholder="Enter Skills"
                             value={skill}
                             onChange={(e)=> setSkill(e.target.value)}
                         />
                     </Col>
                 </Row>

                 <Row className="mb-2">
                     <Col>
                         <TextInput
                             type="text"
                             placeholder="Enter Provider Name"
                             required
                             value={providerName}
                             onChange={(e)=> setProviderName(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             type="email"
                             placeholder="Enter Provider Email"
                             required
                             value={providerEmail}
                             onChange={(e)=> setProviderEmail(e.target.value)}
                         />
                     </Col>
                 </Row>



                 <Row className="mb-2">
                     <Col>
                         <TextInput
                             type="text"
                             required
                             placeholder="Enter Job Technology Level"
                             value={technologyLevel}
                             onChange={(e)=> setTechnologyLevel(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             type="text"
                             required
                             placeholder="Enter Role"
                             value={role}
                             onChange={(e)=> setRole(e.target.value)}
                         />
                     </Col>
                 </Row>


                 <FloatingLabel controlId="floatingTextarea2" label="Job Description " className="mb-3">
                     <Form.Control
                         as="textarea"
                         required
                         type="text"
                         value={description}
                         style={{ height: '100px' }}
                         onChange={(e)=> setDescription(e.target.value)}
                     />
                 </FloatingLabel>

                 <Row className="mb-2">
                     <Col>
                         <SelectBox
                             required
                         onChange={(e)=>{setSelectedValue(e.target.value)}}
                         options={selectOptions}
                         value={selectedValue}
                     />
                     </Col>
                     <Col>
                         <TextInput
                             required
                             type="number"
                             placeholder="Enter Salary "
                             icon="euro"
                             value={salary}
                             onChange={(e)=> setSalary(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             required
                             type="number"
                             placeholder="Enter Teamember"
                             value={team}
                             onChange={(e)=> setTeam(e.target.value)}
                         />
                     </Col>
                 </Row>

                 <Row className="mb-2">
                     <Col>
                         <h6>Job Start Date</h6>
                         <DatePicker
                         selected={jobStartDate}
                         onChange={(date) => setJobStartDate(date)}
                         minDate={today}
                         />
                     </Col>
                     <Col>
                         <h6>Job End Date</h6>
                         <DatePicker
                             selected={jobEndDate}
                             onChange={(date) => setEndDate(date)}
                             minDate={today}
                         />
                     </Col>
                 </Row>

                 <Row>
                     <Col>
                         <h6>Contract Start Date</h6>
                         <DatePicker
                             selected={startContractDate}
                             value={startContractDate}
                             onChange={(date) => setStartContractDate(date)}
                             minDate={today}
                         />
                     </Col>
                         {loading &&(<Col md={{ span: 4, offset: 4 }} ><Loading type="spokes" color="#00f7ff"/> </Col>)}
                     <Col>
                         <h6>Contract End Date</h6>
                         <DatePicker
                             selected={endContractDate}
                             onChange={(endContractDate) => setEndContractDate(endContractDate)}
                             minDate={today}
                         />
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col md={{ span: 4, offset: 4 }}>
                         {loading ? null : (
                             <Button type="submit">Submit</Button>
                         )}
                     </Col>
                 </Row>
                </Form>
        </Container>
        </>
    );
};

export default CreateMasterAgreementForm;