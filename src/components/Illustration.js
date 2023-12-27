import React from 'react';
import classes from '../styles/Illustration.module.css';

const Illustration = (src) => {
    return (
            <div className={classes.illustration}>
                <img src={src.src} alt={src.src} />
            </div>
    );
};

export default Illustration;