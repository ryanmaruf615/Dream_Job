// SelectBox.js

import React from 'react';
import { Form } from 'react-bootstrap';
import classes from "../styles/TextInput.module.css";

const SelectBox = ({ options, onChange, value }) => {
    return (
        <Form.Select className={classes.textInput} onChange={onChange} value={value}>
            <option value="">Material Group</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Form.Select>
    );
};

export default SelectBox;
