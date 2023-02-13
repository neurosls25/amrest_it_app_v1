import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, require: false },
    lastname: { type: String, require: false },
    dateIn: { type: String, require: false },
    dateOut: { type: String, require: false },
    level: { type: String, require: false },
    seco: { type: String, require: false },
    company: { type: String, require: false },
    department: { type: String, require: false },
    position: { type: String, require: false },
    location: { type: String, require: false },
    email: { type: String, unique: true, require: false },
    phoneNum: { type: String },
    language: { type: Array, default: [], require: false },
    image: { type: String, require: false },
    requests: { type: Array, default: [], require: false },
    devices: { type: Array, default: [], require: false },
    assets: { type: Array, default: [], require: false },
    password: { type: String, default: '123456', require: false },
    manager: { type: String, require: false },
    isAdmin: { type: Boolean, default: false, require: false },
    userStatus: { type: String, default: "Creating", require: false },
    type: { type: String, default: "user", require: false },
    gestor: { type: String, require: false },
    token: { type: String, require: false },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
export default User;
