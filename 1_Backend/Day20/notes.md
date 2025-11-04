Here this cookie() sends the token to your browser and stored.  
when you visit again then no need to send token by manually it send automatically by browser

res.cookie("token", token, {
  httpOnly: true,   // not accessible via JS on the client
  secure: true,     // only sent over HTTPS
  maxAge: 3600000   // expires in 1 hour
});

if you not give the expire time of token then it now expire in life time
<!-- ************************************************* -->
To create the JWT token:  npm i jsonwebtoken
<!-- ************************************************* -->
when server send the jwt token to browser then it stored in the cookies when user again visit then cookies automatically send by browser to server and server have to parse the cookies in js object with the help of (cookies-parser)

Install cookies-parser: npm i cookie-parser
<!-- ************************************************* -->
Jo user ne token bheja hai uska detail
{
  _id: '6906fbe8bfce0d72192ff55a',
  emailId: 'ravi432@gmail.com',
  iat: 1762066447      (issued at )-> ye token kab generate huaa tha
}
