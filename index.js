require('dotenv').config();
//console.log(process.env.MONGODB_URL)


const express = require('express')
const app = express()
const port = 5000

const {User} = require("./models/User");

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');



mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
}).then(() => console.log("hello connected...."))
        .catch(err => console.log(err));


//application/x-www-firm-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());



app.get('/', (req, res) => {res.send('hello han')})


app.post('/register', (req, res) => {
        //회원 가입에 필요한 정보들을 클라이언트에서 가져오면
        //그것들을 디비에 넣어준다.
        const user = new User(req.body)

        user.save((err, doc) => {
                if (err) return res.json({success: false, err})

                return res.status(200), json({success: true})
        })
})



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

