You need to do the validation :  on  schema level
                                 on also API level

why we need to validate on API level:because we check for the all require feild(submit) then we store in database, so our DB call saves , uneccessarry not call the db. and also user experience good not wait for delay like 10ms.

<!-- ************************************************** -->
database store = hascode+salt(string)

bcrypt is a library :
bcrypt automatically generates a unique random hascode for each password hash.

When you call bcrypt.hash(password), the library:

Generates a random 16-byte salt.

Combines it with the password.

Runs the bcrypt key setup algorithm multiple rounds (cost factor).

Returns a single string containing both the salt and hash.
<!-- ************************************************** -->
to install bcrypt: npm i bcrypt  (it is faster )
to install bcryptjs: npm i bcryptjs  (it is slower )

