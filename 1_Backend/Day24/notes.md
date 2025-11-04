Redis store the blocked token 
->when anytoken come to node.js server , we firstly check with redis server if match then reject(because token is already blocken) otherwise goes for node.js server for the validation

->Redis have automatic delete functionality just attach the time (time to live) it delete after that time.
<!-- ************************************************* -->
Like mongoDB redis also provide the cloud database 
option(1):install in your own system and make the DB from your own storage
option(2):make a account on redis and buy storage from redis
<!-- ************************************************* -->
connect with mongoDB->mongoose
connect with redisDB->npm i redis
<!-- ************************************************* -->
->data stored in that formate

mongoDB->document
SQL->Table form
redis->Key:value(becuase it retrive easily ,  it follow hasing to find the data in O(1) time)




