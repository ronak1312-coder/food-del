import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(`mongodb+srv://mukeshkhandelwal1812_db_user:9663fd08@cluster0.d42f0vj.mongodb.net/food-del`).then(()=>console.log("DB connected"));
}
