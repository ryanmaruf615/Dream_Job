import React, {useState} from 'react';
import TextInput from "../TextInput";
import SelectBox from "../SelectBox";
import classes from '../../styles/Signup.module.css';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "../Button";
import DateTimePicker from "../DateTimePicker";
import DatePicker from "react-datepicker";
import TextArea from "../TextArea";
import axios from "axios";


const CreateMasterAgreementForm = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [title, setJobTitle] = useState('');
    const [providerName, setProviderName] = useState('');
    const [position, setPosition] = useState('');

    const [providerEmail, setProviderEmail] = useState('');
    const [technologyLevel, setTechnologyLevel] = useState('');
    const [role, setRole] = useState('');

    const [skill, setSkill] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [loading,setLoading] = useState();

    //Date picker States
    const [jobStartDate, setJobStartDate] = useState(new Date());
    const [jobEndDate, setEndDate] = useState(new Date());
    const [startContractDate, setStartContractDate] = useState(new Date());
    const [endContractDate, setEndContractDate] = useState(new Date());

    // values for the select box
    const selectOptions = [

        { value: '1', label: 'Networking Hardware' },
        { value: '2', label: 'Computer Hardware' },
        { value: '3', label: 'Software' },
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
            // selectedValue,
            cycle:"1", //have to remove
            jobStartDate:jobStartDate,
            jobEndDate:jobEndDate,
            startContractDate:startContractDate,
            endContractDate:endContractDate,
        };

        // Set loading to true to indicate that the request is being sent
        setLoading(true);

        try {
            // Send a POST request using Axios
            const response = await axios.post('http://35.174.107.106:3000/agreement', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response here (you can log it or perform other actions)
            console.log(response.data);

            // Reset the form and loading state after successful submission
            setJobTitle('');
            setPosition('');
            setSkill('');
            setProviderName('');
            setProviderEmail('');
            setTechnologyLevel('');
            setRole('');
            setDescription('');
            setSelectedValue('');
            setSalary('');
            setJobStartDate(new Date());
            setEndDate(new Date());
            setStartContractDate(new Date());
            setEndContractDate(new Date());
        } catch (error) {
            // Handle errors here (e.g., show an error message)
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
                             type="text"
                             placeholder="Enter Job Position"
                             value={position}
                             onChange={(e)=> setPosition(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             type="text"
                             placeholder="Enter Skill Level"
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
                             value={providerName}
                             onChange={(e)=> setProviderName(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             type="email"
                             placeholder="Enter Provider Email"
                             value={providerEmail}
                             onChange={(e)=> setProviderEmail(e.target.value)}
                         />
                     </Col>
                 </Row>



                 <Row className="mb-2">
                     <Col>
                         <TextInput
                             type="text"
                             placeholder="Enter Job Technology Level"
                             value={technologyLevel}
                             onChange={(e)=> setTechnologyLevel(e.target.value)}
                         />
                     </Col>
                     <Col>
                         <TextInput
                             type="text"
                             placeholder="Enter Role"
                             value={role}
                             onChange={(e)=> setRole(e.target.value)}
                         />
                     </Col>
                 </Row>


                 <FloatingLabel controlId="floatingTextarea2" label="Enter the description " className="mb-3">
                     <Form.Control
                         as="textarea"
                         type="text"
                         value={description}
                         style={{ height: '100px' }}
                         onChange={(e)=> setDescription(e.target.value)}
                     />
                 </FloatingLabel>

                 <Row className="mb-2">
                     {/*<Col>*/}
                     {/*    <SelectBox*/}
                     {/*    onChange={(e)=>{setSelectedValue(e.target.value)}}*/}
                     {/*    options={selectOptions}*/}
                     {/*    value={selectedValue}*/}
                     {/*/>*/}
                     {/*</Col>*/}
                     <Col>
                         <TextInput
                             type="number"
                             placeholder="Enter Salary "
                             icon="euro"
                             value={salary}
                             onChange={(e)=> setSalary(e.target.value)}
                         />
                     </Col>
                 </Row>

                 <Row className="mb-2">
                     <Col>
                         <h6>Job Start Date</h6>
                         <DatePicker
                         selected={jobStartDate}
                         onChange={(date) => setJobStartDate(date)}
                         />
                     </Col>
                     <Col>
                         <h6>Job End Date</h6>
                         <DatePicker
                             selected={jobEndDate}
                             onChange={(date) => setEndDate(date)}/>
                     </Col>
                 </Row>



                 <Row>
                     <Col>
                         <h6>Contract Start Date</h6>
                         <DatePicker
                             selected={startContractDate}
                             value={startContractDate}
                             onChange={(date) => setStartContractDate(date)}/>
                     </Col>
                     <Col>
                         <h6>Contract End Date</h6>
                         <DatePicker
                             selected={endContractDate}
                             onChange={(endContractDate) => setEndContractDate(endContractDate)} />
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col md={{ span: 4, offset: 4 }}>
                         <Button disabled={loading} type = "submit">Submit Now</Button>
                     </Col>

                 </Row>

                </Form>
        </Container>
        </>
    );
};

export default CreateMasterAgreementForm;