// Importación de dependencias necesarias
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/user.model');
const RolePermission = require('../models/rolePermission.model');

// Cargar variables de entorno
dotenv.config();

// Obtener la clave secreta para JWT desde las variables de entorno
const SECRET_KEY = process.env.JWT_SECRET;

// Función para autenticar usuarios
module.exports.loginUser = async (email, password) => {
    try {
        // Buscar usuario por email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return { message: 'Usuario no encontrado' };
        }

        // Verificar contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { message: 'Contraseña incorrecta' };
        }

        // Obtener permisos del rol del usuario
        const rolePermission = await RolePermission.findAll({ 
            where: { rol_id: user.rol_id },  // Corregido: roleId -> rol_id
            attributes: ['permission_id'] }); // Corregido: permiso_id -> permission_id

        // Mapear los IDs de permisos
        const permisos = rolePermission.map(rp => rp.permission_id);

        // Generar token JWT con la información del usuario y sus permisos
        const token = jwt.sign(
            {
                id: user.id, 
                nombre: user.nombre, 
                email: user.email, 
                rol_id: user.rol_id, 
                permisos
            }, 
            SECRET_KEY, 
            { expiresIn: '1h' }
        );
        return token;
    }
    catch (error) {
        throw new Error(error.message || "Error al iniciar sesión");
    }
};
