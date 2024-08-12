import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
  type: String,
  required: [true, 'Please enter full-name'],
  lowerCase: true
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
   },

   password: {
    type: String,
    required: true
   },

   isAdmin: {
    type: Boolean,
    required: true,
    default: false
   },

   isActive: {
    type: Boolean,
    required: true,
    default: true,
   },
}, {timestamps: true});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;