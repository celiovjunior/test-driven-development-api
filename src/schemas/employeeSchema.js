const { Sequelize } = require("sequelize")

const EmployeeSchema = {
    name: 'employee',
    schema: {
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
    },
    options: {
        tableName: 'tb_employees',
        freezeTableName: false,
        timestamps: false,
    }
}

module.exports = { EmployeeSchema }