import React from 'react';
import { useField } from 'react-form';
import { Form } from 'react-bootstrap';


const TextInput = () => {
    const { getInputProps } = useField('text', {});

    return (
        <Form.Group controlId="formText">
            <Form.Label>Текст</Form.Label>
            <Form.Control { ...getInputProps() } as="textarea" rows="15" placeholder="Введите текст..." />
        </Form.Group>
      );
};

export default TextInput;