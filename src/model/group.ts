import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Group extends Model {
    public name!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}
Group.init({
  name: {
    type: DataTypes.STRING(45),
  },
}, {
  paranoid: true,
  sequelize,
});
export default Group;
