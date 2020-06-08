import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthContext } from '../context';
import { SignUpModal, SignInModal } from '../components';


export default () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [signUpIsOpened, setSignUpOpened] = useState(false);
  const [signInIsOpened, setSignInOpened] = useState(false);
  const openSignUp = () => setSignUpOpened(true);
  const closeSignUp = () => setSignUpOpened(false);
  const openSignIn = () => setSignInOpened(true);
  const closeSignIn = () => setSignInOpened(false);

  return (
    <>
      <SignUpModal show={signUpIsOpened} handleClose={closeSignUp}/>
      <SignInModal show={signInIsOpened} handleClose={closeSignIn}/>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Link className="navbar-brand" to="/">Enjoy</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
           <Link to="/" className="nav-link">Главная</Link>
           <Link to="/posts" className="nav-link">Посты</Link>
         </Nav>
         <Nav>
          {
            isAuthenticated
              ? (
                <div>
                  <Link to="/create-post" className="btn btn-outline-secondary btn-md" role="button" aria-pressed="true">+ Создать пост</Link>{' '}
                  <Button variant="outline-secondary" onClick={logout}>Выйти</Button>{' '}
                  <Link to="/profile" className="btn btn-secondary btn-md" role="button" aria-pressed="true">Профиль</Link>
                </div>
              )
              : (
                <div>
                  <Button variant="outline-secondary" onClick={openSignIn}>Войти</Button>{' '}
                  <Button variant="secondary" onClick={openSignUp}>Зарегистрироваться</Button>
                </div>
              )
          }
         </Nav>
       </Navbar.Collapse>
   </Navbar>
 </>
  );
};
