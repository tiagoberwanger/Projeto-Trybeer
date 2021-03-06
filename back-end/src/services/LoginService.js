const jwt = require('jsonwebtoken');
const { findUser } = require('../models/Users');
const { secret } = require('../Auth/TokenValidation');

const STATUS_OK = 200;
const STATUS_UNAUTHORIZED = 401;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const LoginService = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user || password !== user.password) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: 'Incorrect username or password' });
    }
    const jwtConfig = {
      expiresIn: '14d',
      algorithm: 'HS256',
    };
    const payload = { id: user.id, name: user.name, email: user.email, role: user.role };
    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    const data = { ...payload, token };
    req.user = data;
    res.status(STATUS_OK).json(data);
  } catch (error) {
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  LoginService,
};