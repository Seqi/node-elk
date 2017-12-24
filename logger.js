let winston = require('winston')
let winstonGraylog = require('winston-graylog2')

let winstonGraylogOptions = {
    name: 'Graylog',
    level: 'debug',
    silent: false,
    handleExceptions: false,
    prelog: (msg) => {
        // This lets you transform the message before logging
        return msg
    },
    processMeta: (meta) => {
        // This lets you transform the metadata before logging
        // This includes the static meta and added meta
        return meta
    },
    graylog: {
        servers: [ { host: 'localhost', port: 12201 } ],
        // hostname: 'myapp' // Defaults to os.hostname()
        facility: 'Node.js',
        bufferSize: 1400 // default, shouldn't exceed MTU        
    },
    // Enrichment properties
    staticMeta: {
        wew: 'lad'
    }
}

winston.add(winston.transports.Console, { 
    level: 'debug', 
    colorize: true,
    timestamp: true
})

winston.add(winstonGraylog, winstonGraylogOptions)

module.exports = winston