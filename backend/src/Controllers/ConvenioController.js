const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const convenios = await knex('convenio').select('*');
      return res.status(200).json(convenios)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { tipo_convenio, custo_convenio } = req.body;
      
      // const [ id_convenio ] = await knex('convenio')
      // .select('*')
      // .orWhere({nome_cargo})
      

      // if(id_convenio){
      //   return res.status(409).json({msg: 'informação já cadastrada'})
      // }

      const convenio = await knex('convenio')
      .insert({
        tipo_convenio,
        custo_convenio
      }) 

      return res.status(201).json(convenio)
    } catch (error) {
      next(error)
    }

  }
}