import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  // Get user data from localStorage if it exists
  const user = JSON.parse(localStorage.getItem('profile'));
  // Using BrowserRouter to handle routing for different pages
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to = "/blogs" />} />
          <Route path="/blogs" exact component = {Home} />
          <Route path="/blogs/search" exact component = {Home} />
          <Route path="/blogs/:id" exact component = {PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth/> : <Redirect to = "/blogs"/>)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
