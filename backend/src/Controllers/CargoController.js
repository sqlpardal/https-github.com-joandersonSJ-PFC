const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const documentos = await knex('cargos').select('*');
      return res.status(200).json(documentos)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { nome_cargo } = req.body;
      
      const [ id_cargo ] = await knex('cargos')
      .select('*')
      .orWhere({nome_cargo})
      

      if(id_cargo){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }

      const cargo = await knex('cargos')
      .insert({nome_cargo}) 

      return res.status(201).json(cargo)
    } catch (error) {
      next(error)
    }

  }
}