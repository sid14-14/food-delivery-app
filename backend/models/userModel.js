import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} }
}, { minimize: false }) //if minimize: false not added, cartdata will not be created. as we not providing any data here, so we provide minimize

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;