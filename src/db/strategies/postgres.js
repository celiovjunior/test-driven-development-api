const CrudInterface = require("./interfaces/crudInterface")
const { Sequelize } = require("sequelize");

class Postgres extends CrudInterface {
    constructor() {
        super()
        this._driver = null
        this._employees = null
        this._connect()
    }

    async isConnected() {
        try {
            await this._driver.authenticate()
            return true;
        } catch (error) {
            console.log('FAIL!', error)
            return false;
        }
    }
   
    create(item) {
        console.log("item was saved in postgres")
    }

    async defineModel() {
        this._employees = driver.define('employee', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                required: true,
            },
            role: {
                type: Sequelize.STRING,
                required: true,
            }
        }, {
            tableName: 'tb_employees',
            freezeTableName: false,
            timestamps: false,
        })
    
        await Employees.sync()
    }

    _connect() {
        this._driver = new Sequelize(
            'pizzeria',
            'user',
            'password',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
            }
        )
    }
}

module.exports = Postgres