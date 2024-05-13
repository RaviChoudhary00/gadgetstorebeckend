const mongoose = require('mongoose')
const  {Schema} = mongoose
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/ecommerce');
    console.log('Database connnected')
}

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
      },
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    cart:{
        type: Array
    },
    orders:{
        type: Array
    }
  });

  exports.users = mongoose.model('Users',userSchema)