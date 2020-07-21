const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const telefones = await knex('telefone').select('*');
      return res.status(200).json(telefones)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){
    try{
      const { numero } = req.body;

      const [ id_numero ] = await knex('telefone')
      .select('*')
      .where({numero})

      if(id_numero){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }
      
      const numeroRegistro = await knex('telefone')
      .insert({numero});
      return res.status(201).json({numeroRegistro});

    }catch(error){
      next(error)
    }
  }
}