
import React from 'react';
import { useForm } from 'react-form';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import NicknameInput from '../NicknameInput';
import PasswordInput from '../PasswordInput';


const SignInForm = ({ login }) => {
  const { Form, meta: { canSubmit, isValid } } = useForm({
    debugForm: false,
    onSubmit: async (values) => {
      const { nickname, password } = values;
      if (isValid) await login(nickname, password);
    },
  });

  return (
    <Form>
      <NicknameInput />
      <PasswordInput />
      {/*
        <BootstrapForm.Group controlId="formBasicCheckbox">
          <BootstrapForm.Check type="checkbox" label="Чужой компьютер" />
        </BootstrapForm.Group>*/
      }
      <Button variant="primary" type="submit" disable={!canSubmit}>
        Войти
      </Button>
    </Form>
  );
};

export default SignInForm;
