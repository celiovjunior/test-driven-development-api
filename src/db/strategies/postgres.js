const CrudInterface = require("./interfaces/crudInterface")
const { Sequelize } = require("sequelize");

class Postgres extends CrudInterface {
    constructor() {
        super()
        this._driver = null
        this._employees = null
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
   
    async create(item) {
        const { dataValues } = await this._employees.create(item)
        return dataValues
    }

    async defineModel() {
        this._employees = this._driver.define('employee', {
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
    
        await this._employees.sync()
    }

    async connect() {
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
        await this.defineModel()
    }
}

module.exports = Postgres