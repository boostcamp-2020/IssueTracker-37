import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import SignInPage from './pages/SignInPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/signin" exact component={SignInPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
