class CustomAPIError extends Error {
    constructor(message, statuscode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statuscode) => {
    return new CustomAPIError(msg, statuscode)
}

module.exports = { createCustomError, CustomAPIError}