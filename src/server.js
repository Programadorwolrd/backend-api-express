import express from "express"
import {PORT,HOST} from  './config.js'
import DADOS from './config.js'


// import nomeAleatorio from ''
const app = express()


app.listen(PORT, () => {
  console.log(`Server running on ${HOST}${PORT}`)
})

app.get('/',(req,res) => {
    res.json({message: "hello world"})
})




console.log(DADOS.ola);
console.log(DADOS.MULHER);