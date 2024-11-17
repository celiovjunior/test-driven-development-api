const CrudInterface = require("./interfaces/crudInterface")

class Postgres extends CrudInterface {
    constructor() {
        super()
    }

    create(item) {
        console.log("item was saved in postgres")
    }
}

module.exports = Postgres