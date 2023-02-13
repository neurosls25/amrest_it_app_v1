import mongoose from "mongoose";

const bonoSchema = mongoose.Schema({
  label: { type: String, require: false, default: "Bono" },
  type: { type: String, require: false, default: "Service" },
  dateRequest: { type: String, require: false, default: "" },
  dateStart: { type: String, require: false, default: "" },
  dateExpires: { type: String, require: false, default: "" },
});

const Bono = mongoose.model("Bonos", bonoSchema);
export default Bono;
