const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { compare, hash } = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');

/**
 * @desc login user Request
 * @route POST /auth/register
 * @access PUBLIC
 */
const userRegister = asyncHandler(async (req, res) => {
  // get data from request
  const { name, email, password } = req.body;

  // validate data if not given
  !name || !email || (!password && res.status(400).json('All fields are required!'));

  // exist email check
  const emailExist = await User.findOne({ email });
  emailExist && res.status(400).json({ message: 'email already exists' });

  //---- create new user Now make hash password ----
  const hashPass = await hash(password, 10);

  //---- create new user ----
  const newUser = await User.create({ name, email, password: hashPass });

  //---- send success message ----
  newUser
    ? res.status(201).json({ message: 'User created successful', newUser })
    : res.status(403).json({ message: 'Invalid user data' });
});

/**
 * @desc login user Request
 * @route POST /auth/login
 * @access PUBLIC
 */
const userLogin = asyncHandler(async (req, res) => {
  //---- Get user data from request body ----
  const { email, password } = req.body;

  //---- validate datas ----
  if (!email || !password) return res.status(400).json({ message: 'Please fill all the fields' });

  //---- check if valid email exists ----
  const loginUser = await User.findOne({ email });
  !loginUser && res.status(400).json({ message: 'User does not exist' });

  const checkPass = await compare(password, loginUser.password);
  !checkPass && res.status(400).json({ message: 'Invalid password' });

  //---- access token make ----
  const accessToken = sign(
    {
      email: loginUser.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
  );
  // res.json({ token: accessToken });

  //---- refresh token make ----
  // const refreshToken = sign(
  //   {
  //     email: loginUser.email,
  //     role: loginUser.role,
  //   },
  //   process.env.REFRESH_TOKEN_SECRET,
  //   {
  //     expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  //   }
  // );

  //---- save refresh token to cookie ----
  res
    .cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .json({ token: accessToken, user: loginUser });
});

/**
 * @desc get a 7 days refresh token
 * @route GET /auth/refresh
 * @access PUBLIC
 */
// const refreshToken = (req, res) => {
//   //---- get refresh token from cookie ----
//   const rtCookie = req.cookies;
//   !rtCookie?.refresh_token && res.status(401).json({ message: 'You are not authenticated' });

//   const token = rtCookie.refresh_token;

//   //---- verify refresh token ----
//   verify(
//     token,
//     process.env.REFRESH_TOKEN_SECRET,
//     asyncHandler(async (err, reveal) => {
//       err && res.status(401).json({ message: 'Invalid token request' });

//       //---- find user by email ----
//       const tokenUser = await User.findOne({ email: reveal.email });
//       !tokenUser && res.status(401).json({ message: 'Invalid token request' });

//       //---- make access token for refresh token ----
//       const accessToken = sign(
//         {
//           email: tokenUser.email,
//           role: tokenUser.role,
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//           expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
//         }
//       );
//       res.json({ token: accessToken });
//     })
//   );
// };

/**
 * @desc logged in user info
 * @route GET /auth/me
 * @access PRIVATE
 */
const me = (req, res) => {
  !req.me && res.status(401).json({ message: 'User not logged in' });

  res.json({ user: req.me });
};

/**
 * @desc logout user by clearing cookie
 * @route POST /auth/login
 * @access PUBLIC
 */
const userLogout = (req, res) => {
  //---- get cookie from request ----
  // const myCookie = req.cookies;
  // !myCookie?.access_token && res.status(401).json({ message: 'You are not authenticated' });

  //---- clear cookie ----
  res
    .clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
    })
    .json({ message: 'Logout success' });
};

//---- export controller ----
module.exports = {
  userLogin,
  userRegister,
  me,
  userLogout,
};
