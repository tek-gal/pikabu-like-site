import React from 'react';
import { useForm } from 'react-form';
import { Button } from 'react-bootstrap';
import NicknameInput from '../NicknameInput';
import PasswordInput from '../PasswordInput';
import RepeatPasswordInput from '../RepeatPasswordInput';


const SignUpForm = ({ register }) => {
  const repeatedPassword = {};
  const { Form, getFieldValue, meta: { canSubmit, isValid } } = useForm({
    debugForm: false,
    onSubmit: async (values) => {
      const { nickname, password } = values;
      if (isValid) await register(nickname, password);
    },
  });

  return (
    <Form>
      <NicknameInput />
      <PasswordInput repeatedPassword={repeatedPassword}/>
      <RepeatPasswordInput getPassword={() => getFieldValue('password')} output={repeatedPassword}/>
      <Button variant="primary" type="submit" disable={!canSubmit}>
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default SignUpForm;
