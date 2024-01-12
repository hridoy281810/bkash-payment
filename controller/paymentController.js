const axios = require('axios')
const globals = require('node-global-storage')
const { v4: uuidv4 } = require('uuid');
class paymentController {
    bkash_headers = async ()=>{
        return {
                "Content-Type":	"application/json",
                Accept: "application/json",
                authorization: globals.get('id_token'),
                'x-app-key': process.env.bkash_api_key
            
        }
    }
    payment_create = async(req,res)=> {
       const {amount} = req.body
       try {
        const {data} = await axios.post(process.env.bkash_create_payment_url,{
              mode: '0011',
              payerReference: " ",
              callbackURL:  'http://localhost:5000/bkash/payment/callback',
              amount: amount,
              currency: "BDT",
              intent: "sale",
              merchantInvoiceNumber: 'Inv' + uuidv4().substring(0,5)
        },{
       headers: await this.bkash_headers()
        })
        console.log(data)
        // return res.status(200).json({bkashURl:data})
       } catch (error) {
        return res.status(401).json({error: error.message})
       }
    }
}
module.exports = new paymentController();