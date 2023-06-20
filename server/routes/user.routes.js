const router = require('express').Router();
const authController = require('../controllers/auth.controller.js');
const userController = require('../controllers/user.controller.js');

//Authentification
router.post('/register', authController.signUp);

//User Display
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);

module.exports = router;

