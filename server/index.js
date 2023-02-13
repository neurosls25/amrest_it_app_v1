// IMPORT LIBRARIES
const express = require("express");
const cors = require('cors')
require("dotenv").config();
// IMPORT CONNECTION DATABASE
const mongoConnect = require("./dbConnect/dbConnect.js");
// IMPORT ROUTES
const userRouter = require("./routes/userRoutes.js");
const deviceRouter = require("./routes/deviceRoutes.js");
const assetRouter = require("./routes/assetRoutes.js");
const { errorHandler, notFound } = require("./middlewares/Error");

// SET SERVER PORT
const PORT = process.env.PORT || 5050;

// APP START
const app = new express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// USERS API ROUTES
app.use("/api/users", userRouter);
app.use("/api/devices", deviceRouter);
app.use("/api/assets", assetRouter);

// ERRORS HANDLERS
app.use(notFound);
app.use(errorHandler);
// IMPORT DATA

// LOCAL SERVER LISTENING FOR REQUESTS ON PORT: 5000
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  mongoConnect();
});
