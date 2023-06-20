const router = require('express').Router();
const authController = require('../controllers/auth.controller.js');
const userController = require('../controllers/user.controller.js');

//Authentification
router.post('/register', authController.signUp);

//User Display
router.get('/', userController.getAllUsers);

module.exports = router;

