
const axios = require('axios')
const globals = require('node-global-storage')
class middleware {
    bkash_auth = async (req,res,next)=>{
   globals.unset('id_token')
   try {
    const {data} =  await axios.post()
   } catch (error) {
    
   }
    }
}
module.exports = new middleware;