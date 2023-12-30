import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../TextInput';
import classes from '../../styles/Signup.module.css';
import { Form } from 'react-bootstrap';
import Button from '../Button';
import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';



const MaterialGroupForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);



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
            const response = await axios.post('http://35.174.107.106:3000/materialGroup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response here (you can log it or perform other actions)
            console.log(response.data);
            SuccessMessage({ title: 'Saved successfully' });

            // Reset the form and loading state after successful submission
            setName('');
            setDescription('');
            setPrice('');
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
                        placeholder="Material name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextInput
                        type="text"
                        placeholder="Material Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <TextInput
                        type="number"
                        placeholder="Material price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <Button disabled={loading} type="submit">
                        Submit Now
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default MaterialGroupForm;
