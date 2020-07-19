//Middleware responsavel por verificar se o usuario está atuorizado
const verifyIfHasAuthorization = (req,res,next) =>{

  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({msg: 'unauthorized'})
  }
  return next();
}

module.exports = verifyIfHasAuthorization;