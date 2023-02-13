import mongoose from "mongoose";

const phoneLineSchema = mongoose.Schema({
  type: { type: String, require: false, default: "Phone Line" },
  label: { type: String, require: false, default: "Service" },
  simCard: { type: String, require: false, default: "" },
  phoneNum: { type: String, require: false, default: "" },
  shortDial: { type: String, require: false, default: "" },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "PlanMovil" },
  bonos: { type: mongoose.Schema.Types.ObjectId, ref: "Bonos" },
});

const PhoneLine = mongoose.model("PhoneLines", phoneLineSchema);
export default PhoneLine;
