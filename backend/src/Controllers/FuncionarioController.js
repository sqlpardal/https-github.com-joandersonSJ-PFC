const knex = require('../database/index');

module.exports = {
  async index(req, res, next){
    try {
      const funcionarios = await knex('funcionarios').select('*');
      return res.status(200).json(funcionarios)
    } catch (error) {
      next(error)      
    }
  },
  async create(req, res, next){

    try {
      const { matricula_funcionario,
              nome,
              sexo,
              email,
              escolaridade,
              situacao_func,
              vinculo,
              atividades } = req.body;
      
      const [ id_funcionario ] = await knex('funcionarios')
        .select('*')
        .where({
          matricula_funcionario,
          nome,
          sexo,
          email,
          escolaridade,
          situacao_func,
          vinculo,
          atividades
        })

      if(id_funcionario){
        return res.status(409).json({msg: 'informação já cadastrada'})
      }

      const funcionario = await knex('funcionarios')
      .insert({
        matricula_funcionario,
        nome,
        sexo,
        email,
        escolaridade,
        situacao_func,
        vinculo,
        atividades
      }) 

      return res.status(201).json(funcionario)
    } catch (error) {
      next(error)
    }

  }
}