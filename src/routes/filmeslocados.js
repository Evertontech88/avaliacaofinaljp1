const express = require('express')
const ControllerFilmeslocados = require('../controllers/filmeslocados')
const auth = require ("../middleware/auth")

// iniciaçizando as rotas do express
const router = express.Router()


router.post('/', ControllerFilmeslocados.CreateFilmeslocados)
router.post('/login', ControllerFilmeslocados.Login)
router.get('/',auth,ControllerFilmeslocados.GetFilmeslocados)
router.put('/:id',auth, ControllerFilmeslocados.UpdateFilmeslocados)
router.delete('/:id',auth, ControllerFilmeslocados.DeleteFilmeslocados)


// criando as rotas
//routers.get('/', (req,res) => {
   // res.send({msg: 'funcionou'})
//})
//exportando a rota
module.exports= router