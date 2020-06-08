import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import useHttp from "../../hooks/http.hook";
import useMessage from '../../hooks/message.hook';
import SignUpForm from './SignUpForm'


export default ({ show, handleClose }) => {
  const { request, error, clearError } = useHttp();
  const showMessage = useMessage();
  const register = async (nickname, password) => {
    try {
      const data = await request("/auth/register", "POST", { nickname, password });
      showMessage(data.message);
      handleClose();
    } catch (e) {}
  };
  useEffect(() => {
    showMessage(error);
    clearError();
  }, [showMessage, error, clearError])


  return (
    <Modal show={show} onHide={handleClose}>
        {
            (
              <>
                <Modal.Header closeButton>
                  <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SignUpForm register={register}/>
                </Modal.Body>
              </>
            )
        }
    </Modal>
  );
};
