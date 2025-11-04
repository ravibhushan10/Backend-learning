mongoDB compass is a software(GUI)that help to connect and see with cluster(database server).

Key:mongodb+srv://Codingravi:ravi54321@coding.qafq1kk.mongodb.net/
<!-- ********************************************* -->
SQL follow the schema (proper formate to insert the data)
but our Nosql(not only sql)  mongoDB don't follow the schema , you can insert the any formate of document in collections.

<!-- ********************************************* -->
to cummunicate with database through mongoDB compass we have to install the mongodb drivers : npm i mongodb
<!-- ********************************************* -->
 at this time it check database,collection is exist or not , when not exist it automatically create new one

    const findresult=await collection.find({}).toArray();
    console.log("found documents+>",findresult);

 Here collection or .find()(cursor) is not making network call  , actually toArray() is making network call
 -> .toArray() goes and take all data of database and gives to you system,which is very dangerous 
 ->suppose in database you have 10gb data then you system hange it won't accept(by  RAM ) whole data.
 ->that's why we have cursor(gives by collection) which point one document at a time and send only one at a time to backend.   
<!-- ********************************************* -->
here every document comes one by one from the database with the help of cursor
    const findresult= collection.find({});
    for await(const obj of findresult)
        console.log(obj);

