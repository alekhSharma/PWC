<<<<<<< HEAD
//Saurah
Node jS + Express +Mongo
post salting and hashing:-   
Install cookie parser to save cookie on user's browser:-  "npm install --save cookie-parser"
Install express session:-  "npm install --save express-session"
Install mongostore:-  "npm install connect-mongostore"
install connect mongo:-  "npm install connect-mongo"

=======
Node jS + Express +Mongo
//working on session
session is stored using mongo store, and encrypted before saving as cookie , using secret.

Additional sesson obje (Say username) is added to session , to check whether the db has that object existing for the 
requested session.