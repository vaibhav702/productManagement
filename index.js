const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const { urlencoded } = require('body-parser')
const routes = require('./src/route/routes')
const multer = require('multer')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().any())

mongoose.connect('mongodb+srv://taabish:lkmgsyjhwbQYgkvX@cluster0.cp3ka.mongodb.net/group31Database?authSource=admin&replicaSet=atlas-12xyw4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
 {useNewUrlParser:true}
)
.then(() => {console.log("mongoDb connected")})
.catch((err) => console.log(err))


app.use('/',routes)

app.listen(process.env.PORT || 3000 , function(){
    console.log('express is running on port',+( process.env.PORT || 3000))
});