import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../TextInput';
import classes from '../../styles/Signup.module.css';
import { Form } from 'react-bootstrap';
import Button from '../Button';
import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';
import Loading from "../Loading";
import {useHistory} from "react-router-dom";



const MaterialGroupForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            name: name,
            description: description,
            price: price,
        };

        // Set loading to true to indicate that the request is being sent
        setLoading(true);
        try {
            // Send a POST request using Axios
            const response = await axios.post('https://dg4gi3uw0m2xs.cloudfront.net/materialGroup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response here (you can log it or perform other actions)
            SuccessMessage({ title: 'Saved successfully' });
            history.push("/");

        } catch (error) {
            // Handle errors here (e.g., show an error message)
            ErrorMessage();
            console.error('Error submitting form:', error);

        } finally {
            // Set loading back to false, whether the request was successful or not
            setLoading(false);
        }
    }

    return (
        <>
            <h1 className="text-center">Create A Material Group</h1>
            <div className={classes.formContent}>
                <Form className={classes.signup} onSubmit={handleSubmit}>
                    <TextInput
                        type="text"
                        required
                        placeholder="Material name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextInput
                        type="text"
                        required
                        placeholder="Material Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <TextInput
                        type="number"
                        required
                        placeholder="Material price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    {loading ? null : (
                        <Button type="submit">Submit</Button>
                    )}
                    {loading &&(<div ><Loading type="spokes" color="#00f7ff" height={'20%'} width={'20%'}/> </div>)}
                </Form>
            </div>
        </>
    );
};

export default MaterialGroupForm;
