->our frontend communicate with bakend throught API and also all individual server in microservice communicate with API 
<!-- ********************************* -->
http method: 
1: get()/read()-> get the data from the backend and show to frontend
2: post()/create()-> send the frontend generated data to the backend(user,name,email data send to database)
3:patch()/update()->Change the our cardentials like change name , password
4:delete()/delete()-> delete username.
<!-- ************************* -->
patch vs put(both are update operation)

put:   PUT /user/5 { "name": "Ravi", "age": 21 } — replaces user 5 entirely
Update or replace an existing resource

patch: PATCH /user/5 { "age": 22 } — only updates age
Partially update a resource.
<!-- **********************REST Api*************************** -->
Api-> its just a function, http method which which used to connect the frontend-backend.
eg-> fetch(), get(),delete(),pathc()

REST API (Representational State Transfer Application Programming Interface)that used by http method.to communicate the server and client

Post, patch,delete,put,get.all are rest api
<!-- *******************Install express ******************************* -->
1: npm init
2: npm install express

3:to run : node filename.js
<!-- ****************************************** -->
if 3000 port is already used :Error: listen EADDRINUSE: address already in use :::3000
 you have to change the port number

-> Restart the server(node ravi.js) to see changes you made 
<!-- **************************** -->
localhost:3000
172.37.23.1:3000
your ip:port number
<!-- **************************** -->
To resolve the restart server again and again to see change
install nodemon:

To install globally(npm i -g nodemon): means you can use in it every file and folder even your entire laptop 

To install locally(npm i  nodemon): means you can use in only day06 folder
<!-- **************************** -->
To run with nodemon : nodemon file.js

Routing : "/"(by default home page)
Routing : "/contact"(contact  page)
Routing : "/about"(about  page)
<!-- *********** routing with use() *************** -->
-> match only initial character of string.
When "/" in the top:

in the case of use: it start checking from the first when i see "/" then it think that ki "/contact" wala kahi andar hoga nested ke form me to andar chala jata hai.
so when you type "/contact" then it show the bydefault "/" wala content


When When "/" in the bottom:
then it start checking from the first when it see "/contact" then it not match go to next ... and find the matching one
<!-- ***** routing with get(),post(),put(),patch(),delete() *** -->
when the full url(route) match then it execute 

->when user navigate localhost:3000/user   then when "/user" match then it execute . 
-> must match full string 
<!-- *********** Routing wildcards *************** -->
abou?t: means character "u" is optional you can also access using "abot" 
abou+t: means charcter "u" use multiple times , abouuuuuuuuuut
abou*t: means after u you can use any charcter multiple times, abouuior89u43jkh54t



