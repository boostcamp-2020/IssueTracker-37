import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from '@hoc/Auth';
import Index from './pages/index';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import GitHubCallbackPage from './pages/GitHubCallbackPage';

const GolbalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  input {
    -webkit-appearance: none;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GolbalStyled />
      <Switch>
        <Route path="/" exact component={Auth(Index, true)}></Route>
        <Route path="/signin" exact component={Auth(SignInPage, false)}></Route>
        <Route path="/signup" exact component={Auth(SignUpPage, false)}></Route>
        <Route
          path="/github_callback"
          exact
          component={GitHubCallbackPage}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
