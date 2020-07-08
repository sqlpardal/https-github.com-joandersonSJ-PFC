const { Router } = require('express');
const routes = Router();

routes.get('/', (req,res) =>{
  res.json({ msg: 'Rotas funcionando' })
})

module.exports = routes;