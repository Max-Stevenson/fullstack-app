require("dotenv").config();
const HttpError = require("../models/http-error");
const TOKEN = process.env.TOKEN;
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed.");
    }
    const decodedToken = jwt.verify(token, TOKEN);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    return next(new HttpError("Authentication failed.", 401));
  }
};
