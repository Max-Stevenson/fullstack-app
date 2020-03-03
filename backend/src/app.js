require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
const DB_PASSWORD = process.env.DB_PASSWORD;

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(
    `mongodb+srv://fullAccess01:${DB_PASSWORD}@fullstackapp-i2ixf.mongodb.net/mern?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server up on port 5000");
    });
  })
  .catch(error => {
    console.log(error);
  });
