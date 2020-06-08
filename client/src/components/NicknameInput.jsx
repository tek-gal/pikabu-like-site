import React, { useState } from 'react';
import { useField } from 'react-form';
import { Form as BootstrapForm } from 'react-bootstrap';


const NicknameInput = () => {
  const [isValid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { getInputProps } = useField('nickname', {
    validate: async (value, instance) => {
      if (value.length <= 6) {
        setValid(false);
        setErrorMessage('Минимальная длина имени - 6 символов');
        return false
      }
      setValid(true);
      return true;
    },
    defaultValue: '',
    defaultIsTouched: false,
  });

  return (
    <BootstrapForm.Group controlId="formBasicNickname">
      <BootstrapForm.Label>Имя пользователя</BootstrapForm.Label>
      <BootstrapForm.Control
        {...getInputProps()}
        placeholder="Введите имя пользователя"
        isInvalid={!isValid}
        required
      />
      <BootstrapForm.Control.Feedback type="invalid">
        {errorMessage}
      </BootstrapForm.Control.Feedback>
    </BootstrapForm.Group>
  );
};

export default NicknameInput;
