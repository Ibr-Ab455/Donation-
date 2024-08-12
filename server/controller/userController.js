import UserModel from "../model/user-model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const Register = async (req, res) => {
  
    try{
    //  check if the user already exists

    const user = await UserModel.findOne({email: req.body.email});
     if(user){
      return res.status(400).json({ message: "User already exists"})
     }

    //  hash the password
     const hashedPassword = await bcryptjs.hash(req.body.password, 10);
     req.body.password = hashedPassword;

    //  create the user

     const createUser = await UserModel.create(req.body);
     res.status(200).json({
     message: 'User created successfully',
     data: {
      createUser
     }
     })
    }catch(error){
     return res.status(500).json({
     message: error.message
     })
    }
}


export const Login = async (req, res, next) => {
    const { email, password } = req.body;
  
    if(!email || !password || email === '' || password === ''){
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await UserModel.findOne({ email})
      if(!validUser){
        return res.status(401).json({message: 'please try again'})
      }
      
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if(!validPassword){
       return res.status(401),json({message: 'please try again'})
      }
  
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      
      
      res
      .status(200).cookie('access_token', token, {
        httpOnly: true,
      }).json(rest)
  
    }catch (error) {
      next(error)
    }
  };