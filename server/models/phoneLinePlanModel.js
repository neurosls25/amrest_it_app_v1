import mongoose from "mongoose";

const planMovilSchema = mongoose.Schema({
  carrier: { type: String, require: false, default: "Movistar" },
  planLabel: { type: String, require: false, default: "Standar RST/OPS users." },
  phoneCoverage: { type: String, require: false, default: "National" },
  planData: { type: String, require: false, default: "5Gb" },
  roaming: { type: String, require: false, default: "0Gb" },
  resetPlan: { type: String, require: false, default: "17 of each mont" },
});

const planMovil = mongoose.model("PlanMovil", planMovilSchema);

export default planMovil;
