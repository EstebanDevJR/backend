const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {authenticateToken, checkRole}= require('../middlewares/auth.middleware');
const ROLES = require('../utils/constants');
const errorhandler = require('../utils/error.middleware');

router.post('/users/create', authenticateToken, checkRole(ROLES.ADMIN), userController.createUser);
router.put('/users/update/:id', authenticateToken, checkRole(ROLES.ADMIN), userController.updateUser);
router.get('/users', authenticateToken, checkRole(ROLES.ADMIN), userController.getAllUsersByAdministadorId);
router.delete('/users/delete/:id', authenticateToken, checkRole(ROLES.ADMIN), userController.deleteUser);
router.get('/users/rol/:id', authenticateToken, checkRole(ROLES.ADMIN), userController.getAllUsersByRolId);

router.use(errorhandler);

module.exports = router;

