import React from 'react';
import { useField } from 'react-form';
import { Form } from 'react-bootstrap';


const TitleInput = () => {
    const { getInputProps } = useField('title', {});

    return (
        <Form.Group controlId="formTitle">
            <Form.Label>Название</Form.Label>
            <Form.Control { ...getInputProps() } type="text" placeholder="Введите название" required/>
        </Form.Group>
    );
};

export default TitleInput;