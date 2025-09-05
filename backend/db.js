import mongoose from "mongoose";

const Url = "mongodb://127.0.0.1:27017/inotebook"
const dbConnect = () => {
   try {
     mongoose.connect(Url)
        console.log('MONGODB CONNECT SUCCESSFULLY');
   } catch (error) {
    console.log(error);
    
   }

    
}
export default dbConnect
