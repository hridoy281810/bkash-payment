const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}))
dotenv.config()

app.use(body_parser.json())
app.use('/api', require('./routes/routes'))

const db =async()=>{
    try{
   await mongoose.connect(process.env.db.url)
   console.log('db connect')
    }catch(error){
   console.log(error.message)
    }
}
db()
app.get('/', (req,res)=> res.send("server is running"))
app.listen(port, ()=> console.log(`
bksh server is running on port ${port}!
`))
