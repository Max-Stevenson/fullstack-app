const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "test test",
    email: "test@test.com",
    password: "testing123"
  }
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find(p => p.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    return next(new HttpError("Could not login", 401));
  }

  res.json({ message: "logged in" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
