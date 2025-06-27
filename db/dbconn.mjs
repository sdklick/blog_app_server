import mongoose from "mongoose";
export const dbconn = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("db connect success");
  } catch (error) {
    console.log(error);
  }
};
