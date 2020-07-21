const knex = require('../database');

module.exports = {
  async create(req, res, next){

    try{
      const { numero } = req.body;

      const query = await knex('telefone').insert({numero})
  
      return res.status(201).send();

    }catch(error){
      return next(error)
    }
  }
}