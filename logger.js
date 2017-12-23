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
        console.log('Processing metadata: ', meta)
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

winston.clear();
winston.add(winston.transports.Console, { level: 'debug' })
//winston.add(winstonGraylog, winstonGraylogOptions)

module.exports = winston