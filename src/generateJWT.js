const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ROLES = require('./utils/constants.js'); // Corregí la ruta de importación

// Cargar variables de entorno
dotenv.config();

const payload = {
    id: 1,
    nombre: 'esteban',
    rol: ROLES.ADMIN
};

// Usar la variable de entorno JWT_SECRET
const secret = process.env.JWT_SECRET; 
const options = {
  expiresIn: '1h' //el token expira en 1 hora
};

const token = jwt.sign(payload, secret, options);

console.log('Tu token es:', token);