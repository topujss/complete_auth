const { Router } = require('express');
const { getAllUser, createUser } = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.use(checkToken);

router.route('/').get(getAllUser).post(createUser);

//---- export router ----
module.exports = router;
