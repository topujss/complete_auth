const { verify } = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  !authHeader && res.status(401).json({ message: 'Token not found' });

  const myToken = authHeader.split(' ')[1];

  //---- Verify Token ----
  verify(
    myToken,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (err, reveal) => {
      err && res.status(401).json({ message: 'Invalid token request' });

      //---- get user by email ----
      const me = await User.findOne({ email: reveal.email });
      req.me = me;
      next();
    })
  );
};

module.exports = checkToken;
