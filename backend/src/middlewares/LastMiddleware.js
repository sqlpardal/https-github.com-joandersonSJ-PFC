//Middleware que vai retornar para o usuario a mensagem de erro
const catchAll = (error,req,res,next) => {
  res.status(error.status || 500);
  return res.json({error: error.message});
}

module.exports = catchAll;