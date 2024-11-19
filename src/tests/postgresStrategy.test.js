const assert = require('assert')
const ContextStrategy = require('../db/strategies/base/contextStrategy')
const Postgres = require('../db/strategies/postgres')

const context = new ContextStrategy(new Postgres())
const MOCK_EMPLOYEE_REGISTER = {name: 'pieter', role: 'bartender'}
const MOCK_EMPLOYEE_UPDATE = {name: 'joseph', role: 'waiter'}

describe('Postgres Strategy', function() {
    this.timeout(Infinity)
    this.beforeAll(async function() {
        await context.connect()
        await context.delete()
        await context.create(MOCK_EMPLOYEE_UPDATE)
    })

    it('PostgresSQL Connection', async function() {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('register a employee', async function() {
        const result = await context.create(MOCK_EMPLOYEE_REGISTER)
        delete result.id
        assert.deepEqual(result, MOCK_EMPLOYEE_REGISTER)
    })

    it('list all employees', async function() {
        const [result] = await context.read({ name: MOCK_EMPLOYEE_REGISTER.name })
        delete result.id
        assert.deepEqual(result, MOCK_EMPLOYEE_REGISTER)
    })

    it('update employee information', async function() {
        const [item] = await context.read({ name: MOCK_EMPLOYEE_UPDATE.name })
        const newItem = {
            ...MOCK_EMPLOYEE_UPDATE,
            name: 'carla'
        }
        const [result] = await context.update(item.id, newItem)
        const [updatedItem] = await context.read({ id: item.id })
        assert.deepEqual(result, 1)
        assert.deepEqual(updatedItem.name, newItem.name)
    })

    it('delete an employee', async function() {
        const [item] = await context.read()
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})