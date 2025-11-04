const redisClient = require('../config/redis');

// using the sliding window for rate limiter


// ::1 is the your localhost IP 

const windowSize = 3600;   //one hour in second
const MaxRequest = 60;     

const rateLimiter = async (req,res,next)=>{

    try{
        const key = `IP:${req.ip}`;
        const current_time = Date.now()/1000;
        const window_Time = current_time - windowSize;
        // 1.20 min -1hour = 12.20 = 3122312
                                        //    min     max time
        await redisClient.zRemRangeByScore(key, 0, window_Time);

        const numberOfRequest = await redisClient.zCard(key);
        // Total number of value kitni hai

        if(numberOfRequest>=MaxRequest){
            throw new Error("Number of Request Exceeded");
        }
                                                                           //  you can use crytp library for more security
        await redisClient.zAdd(key,[{score:current_time, value:`${current_time}:${Math.random()}`}]);
        // Request is added

        
        // Key TTL hai usko increase karna
        await redisClient.expire(key,windowSize);
        next();
    }
    catch(err){
        res.send("Error: "+err);
    }

}


module.exports = rateLimiter;


// ::1