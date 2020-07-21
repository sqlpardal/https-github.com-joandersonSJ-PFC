const { Router } = require('express');
const routes = Router();

const TelefoneController = require('./Controllers/TelefoneController');
const DocumentoController = require('./Controllers/DocumentoController');
const CargoController = require('./Controllers/CargoController');
const ConvenioController = require('./Controllers/ConvenioController');
const EnderecoController = require('./Controllers/EnderecoController');

// const authorizationmiddleware = require('./middlewares/Authorization');


// Rotas telefone
routes.get('/listagem/telefone', TelefoneController.index);
routes.post('/cadastro/telefone', TelefoneController.create);

// Rotas documento
routes.get('/listagem/documentos', DocumentoController.index);
routes.post('/cadastro/documentos', DocumentoController.create);

// Rotas cargo
routes.get('/listagem/cargos', CargoController.index);
routes.post('/cadastro/cargos', CargoController.create);

// Rotas convenio
routes.get('/listagem/convenio', ConvenioController.index);
routes.post('/cadastro/convenio', ConvenioController.create);

// Rotas endereco
routes.get('/listagem/endereco', EnderecoController.index);
routes.post('/cadastro/endereco', EnderecoController.create);





// Middleware para não permitir acesso sem autorização
// routes.use(authorizationmiddleware);

module.exports = routes;