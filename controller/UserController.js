const UserModel = require('../DB/Model.js')

const user = UserModel.users

exports.postUser = async(req,res)=>{
    const person =  new user(req.body);
    await person.save();
    res.json(person);
}

exports.getAllUsers = async(req,res)=>{
    const persons = await user.find();
    res.json(persons)
}

exports.getOneUser = async(req,res)=>{
    const person = await user.findOne({email:req.query.email});
    if (!person) {
        res.send("user not found")
    }
    if (person) {
        
        if(person.password===req.query.pass){
            res.json(person)
        }
        else{
            res.send("Invalid credentials")
        }
    }
}

exports.updateOneUser = async(req,res)=>{
    const item = await req.body;
    // await 
    res.json(user)
}

