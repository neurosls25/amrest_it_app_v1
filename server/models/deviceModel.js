import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    label: { type: String, require: false, default: "Device" },
    type: { type: String, require: false, default: "" },
    brand: { type: String, require: false, default: "" },
    model: { type: String, require: false, default: "" },
    level: { type: String, require: false, default: "" },
    company: { type: String, require: false, default: "" },
    department: { type: String, require: false, default: "" },
    imei: { type: String, require: false, default: "" },
    serial: { type: String, require: false, default: "" },
    language: { type: String, require: false, default: "" },
    status: {
      type: String,
      require: false,
      default: "Requesting.",
    },
    specs: {
      type: Array,
      require: false,
      default: [],
    },
    incidentsReport: { type: mongoose.Schema.Types.ObjectId, ref: "Incidents" },
    onStock: { type: Boolean, require: false, default: false },
    userRequestInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          status: { type: String, default: "" },
        },
      ],
    },
    adminRequestInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          status: { type: String, default: "" },
        },
      ],
    },
    deliveryInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          userReceived: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          invoice: { type: String, default: "" },
          status: { type: String, default: "" },
        },
      ],
    },
  },
  { timestamps: true }
);

const Device = mongoose.model("Devices", deviceSchema);
export default Device;
