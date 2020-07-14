import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class User extends Model {
    public name!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}
User.init({
  name: {
    type: DataTypes.STRING(45),
  },
}, {
  paranoid: true,
  sequelize,
});
export default User;
