const { Router } = require('express');
const { userLogin, userLogout, me, userRegister } = require('../controllers/authController');
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.route('/login').post(userLogin);
router.route('/logout').post(userLogout);
router.route('/register').post(userRegister);
router.route('/me').get(checkToken, me);

//---- export router ----
module.exports = router;
