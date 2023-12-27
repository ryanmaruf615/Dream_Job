import React from 'react';
import classes from '../styles/Form.module.css';
const Form = ({children , className ,...rest}) => {
    return (
        <div>
            <form className= {`${className} 
            ${classes.form}`}
                  action="#" {...rest}>
                {children}
            </form>
        </div>
    );
};

export default Form;