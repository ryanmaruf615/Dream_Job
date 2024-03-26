import React from 'react';
import classes from '../styles/TextInput.module.css';
const TextArea = ({...rest}) => {
    return (
        <div>
            <textarea name="postContent" rows={4} cols={83} {...rest}/>
        </div>
    );
};

export default TextArea;