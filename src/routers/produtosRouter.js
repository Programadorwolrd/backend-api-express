//essa pasta router e esse arquivo foi criado na mao e aqui vamos gerenciar as rotas de produtos  

import express from 'express'

   //           função de roteador  express.Router()
const router = express.Router()



router.get('/', (req, res)=>{
    res.json({message:'essa é a rota Produto '})
}
)






export default router