import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-form';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context';
import TextInput from './TextInput';
import TitleInput from './TitleInput';
import useHttp from '../../hooks/http.hook';
import useMessage from '../../hooks/message.hook';


const CreatePostForm = () => {
  const history = useHistory();
  const message = useMessage();
  const { token } = useContext(AuthContext);
  const { request, error, clearError } = useHttp();
  const { Form } = useForm({
    debugForm: false,
    onSubmit: async (values) => {
      try {
        console.log(values)
        await request(
          '/posts/create',
          'POST',
          { ...values },
          { Authorisation: `Bearer ${token}` },
        );
        history.push('/')
      } catch (e) {}
    },
  });
  useEffect(() => {
    message(error);
    clearError();
  }, [message, error, clearError]);

  return (
    <Form>
      <TitleInput />
      <TextInput />
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};

export default CreatePostForm;
