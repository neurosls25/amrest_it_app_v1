const express = require("express");
const expressAsyncHandler = require("express-async-handler");

// CREATE EXPRESS ROUTER
const deviceRouter = express.Router();

// ALL DEVICES
deviceRouter.get("/", expressAsyncHandler(async (req, res) => { }));

// REGISTER DEVICE
deviceRouter.post("/deviceRegister", expressAsyncHandler(async (req, res) => { }));

module.exports = deviceRouter;
