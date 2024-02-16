import express from "express"
import {PORT,HOST} from  './config.js'
import DADOS from './config.js'
import userRouter  from './routers/userRouter.js' // primeiro importa o arquivo das rotas de usuario
import produtosRouter  from './routers/produtosRouter.js' // primeiro importa o arquivo das rotas de produtos
import logger from './routers/middleware/logger.js'//importando o midwere de teste



// import nomeAleatorio from ''
const app = express()


app.use(logger)//aqui é só m midwere bobo que a gnt criou 
app.use('/user',userRouter ) //aqui voce usa a importaçãop
app.use('/produto',produtosRouter  ) //aqui voce usa a importação




app.listen(PORT, () => {
  console.log(`Server running on ${HOST}${PORT}`)
})

app.get('/',(req,res) => {
    res.json({message: "hello world"})
})



