import { Sequelize } from "sequelize";
import { nameDatabase } from "./database";


const sequelize = new Sequelize(nameDatabase, 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
})

export default sequelize;