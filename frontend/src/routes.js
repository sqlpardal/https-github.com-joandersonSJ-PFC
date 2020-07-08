import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Inicio from './pages/Inicio';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/cadastro" component={Cadastro}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;