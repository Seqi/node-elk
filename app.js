let logger = require('./logger')

let interval = 1000 * 2

log = () => {
    logger.debug('Tick')
}

setInterval(log, interval)