const { Router } = require('express');
const routes = Router();

const TelefoneController = require('./Controllers/TelefoneController');
// const authorizationmiddleware = require('./middlewares/Authorization');

routes.get('/', (req,res) =>{
  res.json({ msg: 'Rotas funcionando' })
})

routes.post('/cadastro/telefone', TelefoneController.create);

// Middleware para não permitir acesso sem autorização
// routes.use(authorizationmiddleware);

module.exports = routes;