import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  if (isConnected) {
    console.log("Already Connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;
    console.log("MONGODB IS CONNECTED");
  } catch (error) {
    console.log("Couldn't connect to mongodb", error);
  }
};
