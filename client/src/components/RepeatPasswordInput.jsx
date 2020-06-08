import React, { useState } from 'react';
import { useField } from 'react-form';
import { Form as BootstrapForm } from 'react-bootstrap';


const RepeatPasswordInput = ({ getPassword, output }) => {
  const [isValid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { getInputProps, runValidation, meta: { isTouched } } = useField('repeatPassword', {
    validate: async (value, instance) => {
      if (getPassword() !== value) {
        setValid(false);
        setErrorMessage('Пароли не совпадают');
        return false
      }
      setValid(true);
      return true;
    },
    defaultValue: '',
    defaultIsTouched: false,
  });
  output.validate = async () => {
    if (isTouched) {
      await runValidation();
      await runValidation();
    }
  };

  return (
    <BootstrapForm.Group controlId="formBasicRepeatPassword">
      <BootstrapForm.Label>Повторите пароль</BootstrapForm.Label>
      <BootstrapForm.Control
        {...getInputProps()}
        type="password"
        placeholder="Повторите пароль"
        isInvalid={!isValid}
        required
      />
      <BootstrapForm.Control.Feedback type="invalid">
        {errorMessage}
      </BootstrapForm.Control.Feedback>
    </BootstrapForm.Group>
  );
};

export default RepeatPasswordInput;
