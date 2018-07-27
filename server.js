
var express 		= require('express'),
	cors 			= require('cors'),
	app 			= express(),
	port 			= process.env.PORT || 3000,
	mongoose 		= require('mongoose'),
	cookieParser 	= require('cookie-parser'),
	path	 		= require('path'),
	session 		= require('express-session'),
	MongoStore  	= require('connect-mongo')(session),
	serveStatic 	= require('serve-static'),
	Task 			= require('./api/models/todoListModel'), //created model loading here
	bodyParser 		= require('body-parser');
	var multer  	= require('multer');
	app.use("/public",express.static(path.join(__dirname, 'public')));
	// mongoose instance connection url connection
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/db'); 

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.options('*', cors()); // include before other routes 
	app.use(cors());

	//*****************cookie code************
	app.use(cookieParser());
	
	
	app.set('views', __dirname + '/views');
	app.engine('html', require('ejs').renderFile);
	
	app.use(session({
		secret: 'secretgodknows',
		resave: false,
		saveUninitialized: true,
		 name: "SessionId",
		  store: new MongoStore({
			  url: 'mongodb://localhost/db' ,
			  ttl: 60
			}),
			cookie: { maxAge: 60000000000 }
		})
	);

	var routes = require('./api/routes/todoListRoutes'); //importing route
	routes(app); //register the route

	app.listen(port);
	

	console.log('server started on: ' + port);

