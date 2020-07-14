import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('micro', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql',
});
export default sequelize;
