// Importación de dependencias necesarias
const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de middleware
app.use(express.json());  // Para procesar datos en formato JSON
app.use(cors());  // Habilita Cross-Origin Resource Sharing

// Importación de rutas
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.routes');

// Configuración de rutas con prefijo '/api/v1'
app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', projectRoutes);

// Exporta la aplicación para ser utilizada en otros archivos
module.exports = app;