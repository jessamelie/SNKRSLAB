const router = require('express').Router();
const authController = require('../controllers/auth.controller');


router.post('/register', authController.login);

module.exports = router;
