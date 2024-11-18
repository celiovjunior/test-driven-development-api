const assert = require('assert')
const ContextStrategy = require('../db/strategies/base/contextStrategy')
const Postgres = require('../db/strategies/postgres')

const context = new ContextStrategy(new Postgres())
const MOCK_EMPLOYEE_REGISTER = {name: 'pieter', role: 'bartender'}

describe('Postgres Strategy', function() {
    this.timeout(Infinity)
    this.beforeAll(async function() {
        db = await context.connect()
    })

    it('PostgresSQL Connection', async function() {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it.only('register a employee', async function() {
        const result = await context.create(MOCK_EMPLOYEE_REGISTER)
        delete result.id
        assert.deepEqual(result, MOCK_EMPLOYEE_REGISTER)
    })
})