import React from 'react';
import { Button } from 'react-bootstrap';


const ProfileSettings = () => {
  return (
    <>
      <Button variant="outline-secondary" block>Загрузить фото</Button>{' '}
      <Button variant="outline-secondary" block>Сменить пароль</Button>
    </>
  );
};

export default ProfileSettings;
