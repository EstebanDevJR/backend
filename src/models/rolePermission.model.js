const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const RolePermission = sequelize.define('role_permissions', {
    rol_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'roles', key: 'id' } },
    permission_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'permissions', key: 'id' } }
}, {
    timestamps: false,
    tableName: 'roles_permisos',
});


module.exports = RolePermission;