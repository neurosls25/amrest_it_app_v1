import express from "express";
import User from "./models/userModel.js";
import Asset from "./models/assetModel.js";
import Device from "./models/deviceModel.js";
import users from "./data/users.js";
import assets from "./data/assets.js";
import devices from "./data/devices.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/asset",
  asyncHandler(async (req, res) => {
    await Asset.remove({});
    const importAssets = await Asset.insertMany(assets);
    res.send({ importAssets });
  })
);

ImportData.post(
  "/device",
  asyncHandler(async (req, res) => {
    await Device.remove({});
    const importDevices = await Device.insertMany(devices);
    res.send({ importDevices });
  })
);

export default ImportData;
