logout: means user ko again login karna parega

When user click the logout button then oo cookies lekar aayega and hamko token to delete karke usko invalid token bhejna padega

whenever client gets the new token then it automatically replace by the old token present in cookies 
<!-- ************************************************* -->
solution(1): you have to replace the client cookies(token) with invalid token
solution(2): cookies ko hi expire kar do(backend se cookies bhejo null wala and forntend ko bolo expire time hone par delete kar do , and expire time current wala hi bhej do)

->Problem of both problem is , if user copy the valid cookies then hit the logout then he still about to acccess anything without again login



solution(3): when any token invalid/block  then store that token in DB , in future anyone comes with this token , firstly match with database if match then reject(because it is already blocked),otherwise validate with digital signature.

->You have to store the invalid token untill token is expired(eg:3 days) , onece token is expired then remove form the DB(after 3 days)
->But with DB you have to make the newtwork call , so store the all blocklisted token in-memory(RAM),But you have to reflect the changes in all three repleca server which is another headache.
<!-- Redis(DB) solve all these problem -->
<!-- ********************************************** -->
Redis is very-very fast .because  — Keeps data in RAM for microsecond-level access.
This is an in-memory database.

Redis->where not need to store the data permanently(it acts as a cache memory)
mongoDB->where need to store the data permanently
<!-- ********************************************** -->
you can put the redis into the node.js server but you face the scabality issues

->make a seprate server for the redis



