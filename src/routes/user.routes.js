const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/auth.middleware');

// rutas publicas
router.post('/register', userController.register);
router.post('/login', userController.login);

// rutas protegidas (require authentication)
router.get('/profile', validateToken, userController.getProfile);
router.put('/profile', validateToken, userController.updateProfile);
router.delete('/account', validateToken, userController.deleteAccount);

module.exports = router;