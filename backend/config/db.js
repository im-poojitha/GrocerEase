import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://poojitha:Winter6266@cluster0.93oakhb.mongodb.net/grocerEase').then(()=>console.log("DB Connected"));
};
