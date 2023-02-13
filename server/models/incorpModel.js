import mongoose from "mongoose";

const incorpSchema = new mongoose.Schema({
  type: { type: String, require: false, default: "Incorporation" },
  dateStart: { type: String, require: false, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gestor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  devices: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
  assets: {type: mongoose.Schema.Types.ObjectId, ref: 'Asset'},
  phone: {type: mongoose.Schema.Types.ObjectId, ref: 'Phone'},
  bonos: {type: mongoose.Schema.Types.ObjectId, ref: 'Bonos'},
});

const Incorporation = mongoose.model("Incorporation", incorpSchema);
export default Incorporation;
