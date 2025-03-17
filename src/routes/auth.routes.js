// Importación de dependencias necesarias
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Ruta POST para el inicio de sesión
router.post('/auth/login', authController.login);

// Exportación del router
module.exports = router;