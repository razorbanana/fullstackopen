const morgan = require('morgan')
const requestLogger = morgan(function (tokens, req, res) {
    let str = ''
    if (tokens.method(req, res) === 'POST') {
        str = JSON.stringify(req.body)
    }
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        str
    ].join(' ')
})

module.exports = requestLogger