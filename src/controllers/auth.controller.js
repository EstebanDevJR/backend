// Importación del servicio de autenticación
const authServices = require('../services/auth.services');

// Controlador para el inicio de sesión de usuarios
exports.login = async (req, res) => {
    // Extrae email y password del cuerpo de la petición
    const { email, password } = req.body;
    try {
        // Intenta autenticar al usuario y obtener el token
        const token = await authServices.loginUser(email, password);
        // Responde con el token si la autenticación es exitosa
        res.status(200).json({message: 'Inicio de sesion exitoso', token});
    } catch (error) {
        // Maneja los errores de autenticación
        res.status(400).json({ message: err.message });
    }
};