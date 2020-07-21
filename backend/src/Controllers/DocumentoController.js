const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const documentos = await knex('documentos').select('*');
      return res.status(200).json(documentos)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { rg, cpf, pis } = req.body;
      
      const [ id_documentos ] = await knex('documentos')
      .select('*')
      .where({rg})
      .orWhere({cpf})
      .orWhere({pis})
      

      if(id_documentos){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }

      const documento = await knex('documentos')
      .insert({
        rg,
        cpf,
        pis
      }) 

      return res.status(201).json(documento)
    } catch (error) {
      next(error)
    }

  }
}