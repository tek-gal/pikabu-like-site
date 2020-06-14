import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.sass';
import { Navbar, Message, ErrorBoundary } from './components';
import { AuthContext } from './context';
import useAuth from './hooks/auth.hook';


const HelloPage = React.lazy(() => import('./pages/HelloPage'));
const PostsPage = React.lazy(() => import('./pages/PostsPage'));
const PostPage = React.lazy(() => import('./pages/PostPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage'));


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
              <ErrorBoundary key={Math.random()}>
                <Suspense fallback={'Зарузка...'}>
                  <Switch>
                    <Route exact path="/" component={HelloPage} />
                    <Route exact path="/posts" component={PostsPage} />
                    <Route exact path="/posts/:id" component={PostPage} />
                    {isAuthenticated && <Route exact path="/profile" component={ProfilePage} />}
                    {isAuthenticated && <Route exact path="/create-post" component={CreatePostPage} />}
                    <Redirect to="/"></Redirect>
                  </Switch>
                </Suspense>
              </ErrorBoundary>
          </Container>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
