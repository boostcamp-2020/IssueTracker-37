import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
