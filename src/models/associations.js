const User = require('./user.model');
const Project = require('./project.model');
const UserProject = require('./userProject.model');


User.belongsToMany(Project, {through: UserProject, foreignKey: 'user_id', as : 'proyectos'});
Project.belongsToMany(User, {through: UserProject, foreignKey: 'proyecto_id', as: 'usuarios'});

Project.belongsToMany(User, {foreignKey: 'administrador_id', as: 'administrador'});


module.exports = {User, Project, UserProject};