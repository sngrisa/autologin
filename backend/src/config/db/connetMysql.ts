import { Sequelize } from "sequelize";
import { nameDatabase } from "./database";

class Mysql{

    private sequelize: Sequelize;

    constructor(){
        this.sequelize = new Sequelize(nameDatabase,'root','root',{
            host: 'localhost',
            port: 3306,
            dialect: 'mysql'
        })
        this.testConnection();
    }

    
    private testConnection = async() =>{
        try{
            await this.sequelize.authenticate();
            console.log("Connection with database of Mysql is susccessfull!!!")
        }catch(err: unknown){
            console.error(err);
        }
    }

    public getSequelize = () =>{
        return this.sequelize;
    }
}

export default Mysql;