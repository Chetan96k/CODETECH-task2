//connection.js
import mongoose from "mongoose";
const url = 'mongodb+srv://chetankanti21:Phychemat%40123@cluster0.v5u0m.mongodb.net/test?retryWrites=true&w=majority';

const connectdb=async()=>{
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log("Error connecting to MongoDb: ",error)
    }
    
}

export default connectdb 

//to kill the already using port
/* netstat -ano | findstr :3006
   taskkill /PID 7048 /F
*/
