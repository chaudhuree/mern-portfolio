const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
//docs: admin register
exports.adminRegister = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new BadRequestError("Username and password are required");
    }
    const user = await User.create({
      username: username,
      password: password,
    });
    user.password = "";
    res.status(StatusCodes.OK).send({
        data: user,
        success: true,
        message: "Register successfully",
      });
}

// docs: admin login
exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new BadRequestError("Username and password are required");
    }
    const user = await User.findOne({
      username: username||"chaudhuree",
      password: password || "secret",
    });
    if (!user) {
      throw new UnauthenticatedError("Invalid username or password");
    }
    user.password = "";
    res.status(StatusCodes.OK).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
}
