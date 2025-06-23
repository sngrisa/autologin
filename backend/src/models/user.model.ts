import { DataTypes} from 'sequelize';
import sequelize from '../config/db/sequelizeConfig';

const User = sequelize.define('User',{
    iduser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    emailuser:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default User;