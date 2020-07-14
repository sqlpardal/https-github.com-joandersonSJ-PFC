import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/cadastro" component={Cadastro}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;