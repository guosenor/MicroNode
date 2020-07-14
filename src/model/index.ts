import sequelize from '../db';
import User from './user';

const loadModels = { User };
console.log('models:', Object.keys(loadModels));
sequelize.sync({ force: true });

const { models } = sequelize;
export default models;
