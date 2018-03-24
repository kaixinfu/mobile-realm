import PatySchema from './PartySchema'

class Schema {
    constructor() {
        this.schemas = [
            PatySchema,
        ]
    }
    getNewSchemas() {
        return this.schemas[this.schemas.length - 1]
    }
}

export default Schema