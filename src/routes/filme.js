const express = require('express')
const ControllerFilme = require('../controllers/filme')
const auth = require ("../middleware/auth")

// iniciaçizando as rotas do express
const router = express.Router()


router.post('/', ControllerFilme.CreateFilme)
router.get('/',auth,ControllerFilme.GetFilme)
router.put('/:id',auth, ControllerFilme.UpdateFilme)
router.delete('/:id',auth, ControllerFilme.DeleteFilme)


// criando as rotas
//routers.get('/', (req,res) => {
   // res.send({msg: 'funcionou'})
//})
//exportando a rota
module.exports= router