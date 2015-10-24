var inherits = require('util').inherits

module.exports = function defineError (name, init) {
    name = typeof name === 'string' ? name : 'UndefinedError'
    init = typeof init === 'function' ? init : function () {}

    function ErrorCtor (message) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorCtor)
        else this.stack = (new Error).stack
        this.message = message
        init.apply(this, arguments)
    }
    inherits(ErrorCtor, Error)
    ErrorCtor.prototype.name = name

    return ErrorCtor
}
