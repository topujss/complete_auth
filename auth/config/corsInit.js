const allowedOrigin = ['http:/localhost:5050', 'https://localhost:3000'];

//---- cors settings setup----
const corsInit = {
  origin: (origin, callback) => {
    allowedOrigin.indexOf(origin) !== -1 || !origin
      ? callback(null, true)
      : callback(new Error('origin blocked by CORS'));
  },
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsInit;
