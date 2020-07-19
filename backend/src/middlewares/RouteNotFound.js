//Middleware responsavel por retornar erro caso a rota não exista
const routeNotFound = (req,res,next) =>{
  const error = new Error('Route not found');
  error.status = 404;
  next(error)
}

module.exports = routeNotFound;