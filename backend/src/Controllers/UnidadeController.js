const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const unidades = await knex('unidades').select('*');
      return res.status(200).json(unidades)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { inscricao_mte,
              nome_unidade,
              sec_pasta,
              servicos,
              imovel,
              tipo_imovel,
              tipo_unidade } = req.body;
      
      const [ id_unidade ] = await knex('unidades')
        .select('*')
        .where({
          inscricao_mte,
          nome_unidade,
          sec_pasta,
          servicos,
          imovel,
          tipo_imovel,
          tipo_unidade
        })

      if(id_unidade){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }

      const unidade = await knex('unidades')
      .insert({
        inscricao_mte,
        nome_unidade,
        sec_pasta,
        servicos,
        imovel,
        tipo_imovel,
        tipo_unidade
      }) 

      return res.status(201).json(unidade)
    } catch (error) {
      next(error)
    }

  }
}