let logger = require('./logger')

let interval = 1000 * 2

log = () => {
    let  i = 0;
    logger.debug('Tick', 
        { 
            'someMeta': 'someData',
            'bigol': 'doinks',
            'array': [ 1, 2, 3 ],
            'counter': ++i
        })
}

setInterval(log, interval)