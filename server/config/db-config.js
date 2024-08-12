import mongoose from "mongoose";

const connectMongoDB = async () => {
 try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("CONNECT TO MONGODB DATABASE");
 
}catch (err){
 console.log("ERROR DATABASE", err)
}
}

export default connectMongoDB;