import useModel from "../../models/userModel.js"




const listAll =  (req , res) => {
   const users = userModel.getAll() 
   res.json({
    
    sucess: 'usuairos'
    users
})
}







export default listAll