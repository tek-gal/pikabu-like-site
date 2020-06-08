import React, { useState } from 'react';
import { useField } from 'react-form';
import { Form as BootstrapForm } from 'react-bootstrap';


const PasswordInput = ({ repeatedPassword }) => {
  const [isValid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { getInputProps } = useField('password', {
    validate: async (value, instance) => {
      if (value.length < 6) {
        setValid(false);
        setErrorMessage('Минимальная длина пароля - 6 символов');
        return false
      }
      setValid(true);
      return true;
    },
    defaultValue: '',
    defaultIsTouched: false,
  });
  const onChange = repeatedPassword
   ? async (e) => {
      getInputProps().onChange(e);
      await repeatedPassword.validate(e.target.value);
    }
   : getInputProps().onChange;

  return (
    <BootstrapForm.Group controlId="formBasicPassword">
      <BootstrapForm.Label>Пароль</BootstrapForm.Label>
      <BootstrapForm.Control
        {...getInputProps()}
        type="password"
        placeholder="Введите пароль"
        isInvalid={!isValid}
        onChange={onChange}
        required
      />
      <BootstrapForm.Control.Feedback type="invalid">
        {errorMessage}
      </BootstrapForm.Control.Feedback>
    </BootstrapForm.Group>
  );
};

export default PasswordInput;
