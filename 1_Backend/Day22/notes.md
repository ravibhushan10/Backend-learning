Like Class we also use the method(function) in schema
with the help of method we use reussable many times
<!-- ********************* .evn file ********************* -->
 # sensitive information like server key(digital signature), port, database string we put in .env file and and don't push in github

 Keep secrets (API keys, database passwords, tokens) out of code.

<!-- ********************* .evn file ********************* -->
-> During the testing of your website befor send to production we test with dummy database,api,key,port and test the features 
then that time we only change the .env file and start testing  , don't need to change the all codebase
<!-- ***************** process.env  ********************* -->
process.env is a global object.which exist already bydefault in evry program.

to access you have to Install the "dotenv" module from the npm
dotenv is a zero dependencies module which load the all environment variable from the .env file to process.env  global object.

To install : npm i dotenv