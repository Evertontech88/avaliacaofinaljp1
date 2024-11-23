const ServiceFilme = require('../services/filme')

class ControllerFilme {
   //todas as funções do controller, recebem req, res


   async GetFilme(req, res) {
      //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
      try {
         const filmes = await ServiceFilme.GetFilmes()
         res.send({ msg: filmes })



      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }
   async CreateFilme(req, res) {

      try {

         const { titulo, faixaetaria, diretor } = req.body

         const filme = await ServiceFilme.CreateFilme(titulo, faixaetaria, diretor)
         res.send({ msg: filme })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }

   async UpdateFilme(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {

         const id = req.params.id
         const titulo = req.body.titulo
         const faixaetaria = req.body.faixaetaria
         const diretor = req.body.diretor

         const filmes = await ServiceFilme.UpdateFilme(id, titulo, faixaetaria, diretor)
         res.send({ msg: filmes })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }

   }
   async DeleteFilme(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {
         const id = req.params.id
         await ServiceFilme.DeleteCliente(id)
         res.status(204).send()

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }
   }


 
}

module.exports = new ControllerFilme()