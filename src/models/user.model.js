const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('usuarios', {
    id: {typer: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false, unique: true},
    rol_id: {type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        },
        administrador_id: {type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        }
    },
        timestamps: false,
        tableName: 'usuarios'
    }
);

module.exports = User;