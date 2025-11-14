import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["store_keeper", "manager"],
    default: "store_keeper",
    required: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
