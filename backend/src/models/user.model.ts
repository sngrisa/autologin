import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db/sequelizeConfig';
import { IUser } from '../interfaces/IUser.model';

class User extends Model<IUser> implements IUser {
  public iduser!: number;
  public username!: string;
  public emailuser!: string;
  public password!: string;
  public status!: boolean;
}


User.init({
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailuser: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'User',
  modelName: 'User',
  timestamps: true
});

export default User;