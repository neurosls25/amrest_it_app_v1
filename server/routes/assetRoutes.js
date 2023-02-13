const express = require("express");
const expressAsyncHandler = require("express-async-handler");

// CREATE EXPRESS ROUTER
const assetRouter = express.Router();

// REGISTER USER
assetRouter.post("/assetRegister", expressAsyncHandler(async (req, res) => { }));

module.exports = assetRouter;
