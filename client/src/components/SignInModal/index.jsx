import React, { useEffect, useContext } from "react";
import { Modal } from "react-bootstrap";
import useHttp from "../../hooks/http.hook";
import useMessage from "../../hooks/message.hook";
import SignInForm from "./SignInForm";
import AuthContext from "../../context/AuthContext";

export default ({ show, handleClose }) => {
  const { request, error, clearError } = useHttp();
  const { login } = useContext(AuthContext);
  const showMessage = useMessage();
  const auth = async (nickname, password) => {
    try {
      const userData = await request("/auth/login", "POST", { nickname, password });
      login(userData);
      handleClose();
    } catch (e) {}
  };
  useEffect(() => {
    showMessage(error);
    clearError();
  }, [showMessage, error, clearError]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Аутентификация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignInForm login={auth} />
      </Modal.Body>
    </Modal>
  );
};
