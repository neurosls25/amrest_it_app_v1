import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  type: { type: String, require: false, default: "Request" },
  date: { type: String, require: false, default: "" },
  userRequest: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  devices: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
  assets: {type: mongoose.Schema.Types.ObjectId, ref: 'Asset'},
  phone: {type: mongoose.Schema.Types.ObjectId, ref: 'Phone'},
  bonos: {type: mongoose.Schema.Types.ObjectId, ref: 'Bonos'},
});

const Request = mongoose.model("Requests", requestSchema);
export default Request;
