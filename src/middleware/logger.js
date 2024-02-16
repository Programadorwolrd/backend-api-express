const logger = (req, res, next) => {
console.log(`${req.method} ${req.orginizalUrl}`)
next()
}

export default logger 

//basicamente aqui essa pasta e esse arquivo foram criados na mão 
// é um midwere que fica rodando uma função em rotas especifica


//regras de negocio do sistema ficam no Model valida e salva os dados la no banco 

//Vilw é onde vai mostrar a coisa pro usuario no caso não tem pq temos o react

//Controoler controla fluxo 

//padrao de peojeto mvc , padrao Model Vilw Controler 