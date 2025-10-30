JSON.parse("invalid json");
<!-- this gives you error JSON.parse parse the any valid json formate but here it is not a valid json formate so it gives you error -->

<!-- ***************************************************** -->
if we parse(js ke  object me convert karna) any object with 
JSON.parse(json object)

then why we use
express.json()  : our data comes from the forntend in the form of stream(0,1 ke form me) ,  our express.json () handle the stream little bit little bit it parse
but JSON.parse(json object) ke entire object chahiye hota hai then parse karta hai.