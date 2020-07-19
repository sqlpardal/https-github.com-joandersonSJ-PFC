const { Router } = require('express');
const routes = Router();

// const authorizationmiddleware = require('./middlewares/Authorization');

routes.get('/', (req,res) =>{
  res.json({ msg: 'Rotas funcionando' })
})


// Middleware para não permitir acesso sem autorização
// routes.use(authorizationmiddleware);

module.exports = routes;