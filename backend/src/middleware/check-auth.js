require("dotenv").config();
const HttpError = require("../models/http-error");
const TOKEN = process.env.TOKEN;
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    console.log('nexted');
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      console.log('no token');
      throw new Error("Authentication failed one.");
    }
    const decodedToken = jwt.verify(token, TOKEN);
    console.log(decodedToken);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Authentication failed two.", 401));
  }
};
