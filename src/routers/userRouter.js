//essa pasta router e esse arquivo foi criado na mao e aqui vamos gerenciar as rotas 
import listAll from '../controllers/user/listAll'
import getById from '../controllers/user/getByid'
import create from '../controllers/user/create'
import  update from '../controllers/user/update'
import remove from '../controllersuse'
import express from 'express'

   //           função de roteador  express.Router()
const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)





router.get('/', (req, res)=>{
    res.json({message:'essa é a rota user user'})
}
)



router.get('/id', (req, res)=>{
    res.json({message:'essa é a rota user id '+'ID=' +id})
}
)
router.put('/', (req, res)=>{
    res.json({message:'essa é a rota é put do user'})
}
)

router.delete('/', (req, res)=>{
    res.json({message:'essa é a rota é delete do user'})
}
)



export default router