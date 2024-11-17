const assert = require('assert')
const ContextStrategy = require('../db/strategies/base/contextStrategy')
const Postgres = require('../db/strategies/postgres')

const context = new ContextStrategy(new Postgres())

describe('Postgres Strategy', function() {
    this.timeout(Infinity)
    it('PostgresSQL Connection', async function() {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})