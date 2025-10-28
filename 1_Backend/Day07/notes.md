Api endpoint: when ever we use the work with app.use(), app.get(),app.post()  all are api endpoint.

<!-- **************************** -->
working of postman: Postman is an API testing application. means to check your api is able the send the create data to backend .

without postman you can't be able to do PATCH, PUT, DELETE,POST operation on frontend. but with the help of Postman you can do all operation form the frontend

<!-- ************json vs js object **************** -->
suppose you are sending the data in js object form from the frontend but backend written in java,python  then our backend did't understand , so you have to send the data an universal formate is called json.

json:     
->string formate/text formate(understand by all java,python)
->key always in string formate
->you can send as a value part(key:value) array, number,null,object,string
->you can't send the undefined, function

js object:
->only understand by js  

<!-- ****************************************** -->
Formate to send the data in json : 1 [......]
                                   2 {.......}  
<!-- ****************************************** -->
stringify  it converts the data into the string(json formate) : 

data: { name: 'John', age: 30 } ->this is your js object with lots of extra property which is not understand by physical layer when time to the data travel

converted data into json: '{ "name": "John", "age": 30 }'-> after this data is in string formate so our physical layer understand the string and its converted into the binary formate  and send the whole data from frontend to backend.

-> when backend recieve the data then physical layer convert into string formate (json) then "parser"(express.json) convert the data into the its respective backend language(understandal language like js, java,python)

<!-- ****************************************** -->
app.use() -> it accept all method (GET,POST.....)
app.get() -> it accept only GET method
<!-- ****************************************** -->