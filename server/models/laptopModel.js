import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    type: { type: String, require: false, default: "Device" },
    brand: { type: String, require: false, default: "" },
    model: { type: String, require: false, default: "" },
    level: { type: String, require: false, default: "" },
    company: { type: String, require: false, default: "" },
    department: { type: String, require: false, default: "" },
    serial: { type: String, require: false, default: "" },
    approval: { type: Array, require: false, default: [] },
    specs: {
      type: Array,
      require: false,
      default: [
        {
          image: { type: String, default: "" },
          cpu: { type: String, default: "" },
          os: { type: String, default: "" },
          memory: { type: String, default: "" },
          language: { type: String, default: "" },
          storage: {
            type: Array,
            default: [
              {
                primary: { type: String, default: "" },
              },
              {
                secondary: { type: String, default: "" },
              },
            ],
          },
          ports: { type: String, default: "" },
          screenSize: { type: String, default: "" },
          warranty: {
            type: Array,
            require: false,
            default: [
              {
                warrantyStart: { type: String, default: "" },
                
              },
              {
                warrantyExpires: { type: String, default: "" },
              }
            ],
          },
          comments: { type: Array, default: [] },
        },
      ],
    },
    status: {
      type: String,
      require: false,
      default: "Requesting on progress.",
    },
    onStock: { type: Boolean, require: false, default: false },
    userRequestInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          user: { type: String, default: "" },
          status: { type: String, default: "" },
        },
      ],
    },
    adminRequestInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          user: { type: String, default: "" },
          status: { type: String, default: "" },
        },
      ],
    },
    deliveryInfo: {
      type: Array,
      default: [
        {
          date: { type: String, default: "" },
          user: { type: String, default: "" },
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
