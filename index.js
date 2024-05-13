const express = require('express');
const bodyParser = require('body-parser')
const userConroller = require('./controller/UserController.js')
const cors = require('cors')

const server = express();
// server.use(express.json());
// server.use(express.urlencoded({
//   extended: true
// }));

server.use(bodyParser.json());
app.use(cors())


server.post('/post',userConroller.postUser);
server.get('/',userConroller.getAllUsers);
server.get('/one',userConroller.getOneUser);
server.patch('/one',userConroller.updateOneUser);

server.listen('4000',()=>{
    console.log('server started');
})