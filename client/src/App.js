import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.sass';
import { Navbar, Message } from './components';
import { HelloPage, ProfilePage, CreatePostPage, PostsPage } from './pages';
import { AuthContext } from './context';
import useAuth from './hooks/auth.hook';


function App() {
  const { token, userId, login, logout, ready, nickname, registrationDate } = useAuth();
  const isAuthenticated = !!token;

  if (!ready) {
    // Loader
  }

  return (
    <div className="App">
      <Router>
        <Message />
        <AuthContext.Provider value={{
          token, userId, login, logout, isAuthenticated, nickname, registrationDate,
        }}>
          <Navbar />
            <Container style={{ paddingTop: '2rem' }}>
              <Switch>
                <Route exact path="/" component={HelloPage} />
                <Route exact path="/posts" component={PostsPage} />
                {isAuthenticated && <Route exact path="/profile" component={ProfilePage} />}
                {isAuthenticated && <Route exact path="/create-post" component={CreatePostPage} />}
                <Redirect to="/"></Redirect>
              </Switch>
          </Container>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
