
const redis = require('redis');

// cardentials of our redis database
const redisClient = redis.createClient({
    username: REDIS_USERNAME,
    password: REDIS_PASSWORD,
    socket: {
        host: REDIS_HOST,
        port: REDIS_PORT
    }
});



module.exports = redisClient;
