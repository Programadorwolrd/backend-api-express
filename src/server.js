import express from "express"
import {PORT,HOST} from  './config.js'
import DADOS from './config.js'


// import nomeAleatorio from ''
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}${PORT}`)
})

app.post('./produto',(req,res) => {
    res.send('hello world')
})


console.log(DADOS.ola);
console.log(DADOS.MULHER);