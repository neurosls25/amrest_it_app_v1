const express = require("express");
const expressAsyncHandler = require("express-async-handler");

// CREATE EXPRESS ROUTER
const userRouter = express.Router();

// GET ALL USERS
userRouter.get("/", expressAsyncHandler(async (req, res) => { }));

// GET SINGLE USER
userRouter.get("/:id", expressAsyncHandler(async (req, res) => { }));

// REGISTER USER
userRouter.post("/newIncorporation", expressAsyncHandler(async (req, res) => { }));

// LOGIN USER
userRouter.post("/userLogin", expressAsyncHandler(async (req, res) => { }));

module.exports = userRouter;
