const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { hash } = require('bcrypt');

/**
 * @desc get all users data
 * @route GET /user
 * @access PUBLIC
 */
const getAllUser = asyncHandler(async (req, res) => {
  const userData = await User.find().select('-password').lean();

  // when user is not found
  !userData?.length && res.status(404).json({ message: 'User not found. Add a new user.' });

  res.json(userData);
});

/**
 * @desc create a new user
 * @route POST /user
 * @access PUBLIC
 */
const createUser = asyncHandler(async (req, res) => {
  //---- Get user data from request body ----
  const { name, email, password, role } = req.body;

  //---- validate datas ----
  !name || !email || !password || (!role && res.status(400).json({ message: 'Please fill all the fields' }));

  //---- check if valid email exists ----
  const isEmail = await User.findOne({ email });
  isEmail && res.status(400).json({ message: 'Email already exists' });

  //---- Now make hash password ----
  const hashPass = await hash(password, 10);

  //---- create new user ----
  const newUser = await User.create({ name, email, password: hashPass });

  //---- send success message ----
  newUser
    ? res.status(201).json({ message: 'User created successful' })
    : res.status(403).json({ message: 'Invalid user data' });
});

//---- export controller ----
module.exports = {
  getAllUser,
  createUser,
};
