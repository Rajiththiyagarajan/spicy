import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://RaJith:8056511425@cluster0.had6lj9.mongodb.net/frontend").then(()=>console.log("DB Connected"));
   
}


