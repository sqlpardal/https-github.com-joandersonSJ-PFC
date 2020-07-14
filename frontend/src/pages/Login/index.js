import React from 'react';

import background_login from '../../assets/background-login.svg';
import logo from '../../assets/logo.svg';

import './styles.css';

function Login() {
  return (
    <div className="container">
      <main>
        <img className="logo" src={logo} alt="logo"/>
        <form>
          <div className="input-container">
            <label htmlFor="name">Nome:</label>
            <input id="name" type="text"/>
          </div>

          <div className="input-container">
            <label htmlFor="password">Senha:</label>
            <input id="password" type="password"/>
          </div>
          
          <button id="entrar">ENTRAR</button>
          <button id="voltar">VOLTAR</button>
        </form>
      </main>
      <aside>
        <img className="backround" src={background_login} alt="background_login"/>
      </aside>
      <p>Copyright ©2020 All rights reserved</p>
    </div>
  )
}

export default Login;