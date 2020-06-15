import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const RatingButton = ({text, value, handleClick, relation}) => {
    return (
            <Button 
            variant={relation === value ? "secondary" : "outline-secondary"} 
            onClick={handleClick}
            disabled={relation === value}
            >{text}</Button>
    );
};


const Rating = ({ isAuthenticated, value, onUp, onDown, relation }) => {
    const [relation_, setRelation] = useState(relation);

    const createButton = (text, value, handleClick) => {
        const handler = (event) => {
            setRelation(relation_ === null ? value : null);
            handleClick(event);
        };
        return (<RatingButton text={text} value={value} handleClick={handler} relation={relation_} />);
    }

    return (
        <div>
            {isAuthenticated && createButton('-', 'dislike', onDown)}
            {' '}<small>{value}</small>{' '}
            {isAuthenticated && createButton('+', 'like', onUp)}
        </div>
    );
};


export default Rating;