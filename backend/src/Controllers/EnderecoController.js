const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const endereco = await knex('endereco').select('*');
      return res.status(200).json(endereco)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { cep, 
              rua, 
              complemento, 
              logradouro, 
              numero, 
              bairro, 
              cidade, 
              estado, 
              municipio } = req.body;
      
      const [ id_endereco ] = await knex('endereco')
        .select('*')
        .where({
          cep,
          rua,
          complemento,
          logradouro,
          numero,
          bairro,
          cidade,
          estado,
          municipio 
        })

      if(id_endereco){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }

      const endereco = await knex('endereco')
      .insert({
        cep,
        rua,
        complemento,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        municipio
      }) 

      return res.status(201).json(endereco)
    } catch (error) {
      next(error)
    }

  }
}