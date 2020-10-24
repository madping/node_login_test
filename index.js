require('dotenv').config();
//console.log(process.env.MONGODB_URL)


const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,




        {


                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
        },





        (err) => {




                if (err) {
                        console.log("db err", err);
                } else {
                        console.log("db connected");

                }
        });



app.get('/', (req, res) => {res.send('hello han')})

app.listen(port, () => console.log(`youre port ${port}`))



//const express = require('express')
//const app = express()
//const port = 5000
//
//const mongoose = require('mongoose')
//
//mongoose.connect('mongodb+srv://root:43214321@cluster0.ioieq.gcp.mongodb.net/firsttest?retryWrites=true&w=majority',
//        {
//                useNewUrlParser: true,
//                useUnifiedTopology: true,
//                useCreateIndex: true,
//                useFindAndModify: false
//        })
//
//        .then(() => console.log('connected'))
//        .catch(err => console.log(err))

//
//app.get('/', function(res,req){
//        res.send('hello han')
//})

//
//app.listen(port,function(){
//        console.log(`your port is ${port}`)
//})


//app.get('/', (req, res) => {res.send('hello han')})
//
//app.listen(port, () => console.log(`your port is ${port}`))

