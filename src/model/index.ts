import sequelize from '../db';
import User from './user';
import Group from './group';

const loadModels = { User, Group };
Group.hasMany(User, { constraints: false });
User.belongsTo(Group, { constraints: false });
console.log('models:', Object.keys(loadModels));
sequelize.sync({ force: false });
const { models } = sequelize;
export default models;
