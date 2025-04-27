// Fix import path and error variable
const authServices = require('../services/auth.service');  // Fix: auth.services -> auth.service

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authServices.loginUser(email, password);
        res.status(200).json({message: 'Inicio de sesion exitoso', token});
    } catch (error) {
        res.status(400).json({ message: error.message });  // Fix: err -> error
    }
};