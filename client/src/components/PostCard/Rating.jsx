import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Rating = ({ isAuthenticated, value, onUp, onDown }) => {
    const [evaluatedAs, setEvaluatedAs] = useState('');
    const getEvaluatedAs = (text) => evaluatedAs === '' ? text : '';
    
    const createButton = (text, clickHandler) => {
        return (
            isAuthenticated
                ? <Button 
                    variant={evaluatedAs === text ? "secondary" : "outline-secondary"} 
                    onClick={(event) => {clickHandler(event); setEvaluatedAs(getEvaluatedAs(text))} }
                    disabled={evaluatedAs === text}
                  >{text}</Button>
                : null
        );
    };

    return (
        <div>
            {createButton('-', onDown)}
            {' '}<small>{value}</small>{' '}
            {createButton('+', onUp)}
        </div>
    );
};


export default Rating;