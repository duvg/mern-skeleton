const config = {
    env: process.ENV_NODE || 'development',
    port: process.env.ENV_NODE_PORT || 3000,
    jwtSecret: process.env.NODE_JWT_SECRET || 'Your_Secret_Key',
    mongoUri: process.env.ENV_NODE_MONGO_URI ||
        process.env.EVN_NODE_MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernSimpleStup'
}

export default config;