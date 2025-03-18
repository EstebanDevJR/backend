// Importación de los modelos necesarios
const User = require('./user.model');
const Project = require('./project.model');
const UserProject = require('./userProject.model');

// Definición de la relación muchos a muchos entre Usuario y Proyecto
// Un usuario puede tener muchos proyectos y un proyecto puede tener muchos usuarios
User.belongsToMany(Project, {through: UserProject, foreignKey: 'user_id', as : 'proyectos'});
Project.belongsToMany(User, {through: UserProject, foreignKey: 'proyecto_id', as: 'usuarios'});

// Relación adicional: Un proyecto pertenece a un administrador (que es un usuario)
Project.belongsToMany(User, {foreignKey: 'administrador_id', as: 'administrador'});

// Exportación de los modelos con sus asociaciones
module.exports = {User, Project, UserProject};