const ServiceFilmeslocados = require('../services/filmeslocados')

class ControllerFilmeslocados {
   //todas as funções do controller, recebem req, res


   async GetFilmeslocados(req, res) {
      //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
      try {
         const filmeslocaddos = await ServiceFilmeslocados.GetFilmeslocados()
         res.send({ msg: filmeslocaddos })



      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }
   async CreateFilmeslocados(req, res) {

      try {

         const { idFilme, idCliente, dataLocacao, dataDevolucao } = req.body

         const filmeslocaddos = await ServiceFilmeslocados.CreateFilmeslocados(idFilme, idCliente, dataLocacao, dataDevolucao)
         res.send({ msg: filmeslocaddos })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }

   async UpdateFilmeslocados(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {

         const id = req.params.id
         const idFilme = req.body.idFilme
         const idCliente = req.body.idCliente
         const dataLocacao = req.body.dataLocacao
         const dataDevolucao = req.body.dataDevolucao

         const filmeslocaddos = await ServiceFilmeslocados.UpdateFilmeslocados(id, idFilme, idCliente, dataLocacao, dataDevolucao)
         res.send({ msg: filmeslocaddos })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }

   }
   async DeleteFilmeslocados(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {
         const id = req.params.id
         await ServiceFilmeslocados.DeleteFilmeslocados(id)
         res.status(204).send()

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }
   }


async Login(req,res){

   try {
      const { dataLocacao, idCliente} = req.body
      const token = await ServiceFilmeslocados.Login(dataLocacao, idCliente)
      res.status(200).send({token})
   } 
   catch (error){
      res.status(500).send({ msg: error.message})
   
   }

 
  }
}

module.exports = new ControllerFilmeslocados()