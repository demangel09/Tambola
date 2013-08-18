
/**
 * Module dependencies.
 */

var express = require('express.io')
  , http = require('http')
  , routes = require('./routes')
  , passport = require('passport')
  , mongo = require('./library/mongo.js')
  , path = require('path')
  , flash = require('connect-flash');
 
require('./library/strategy.js');



var app = module.exports = express();
app.http().io();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('bud'));
app.use(express.session({ secret: 'bud' }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(mongo.model);
app.use(app.router);
app.locals.basedir = __dirname;

function auth(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	  res.redirect('/');
}

function isAllowed(req, res, next) {
	 var action = req.body.oper || req.query.oper;
	 var table = req.params.table;
	 var process = req.params.process;
	 if((typeof action == 'undefined')){
		action = 'view';
	 }
	 if(req.user.permission[action+'_'+table+'_'+process]){
		 next();
	 }
	 else{
		 res.json(400,'Access Denied');
	 }
}

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',routes.home);
app.get('/print',auth,routes.print);
app.post('/print',auth,routes.generate);

app.get('/login',routes.login);
//app.post('/login',routes.process_login);
app.get('/main',auth,routes.main);
app.post('/main',auth,routes.process_main);

app.get('/sold',auth,routes.sold);
app.post('/sold',auth,routes.sold_card);
app.get('/verify',auth,routes.verify);
app.post('/verify',auth,routes.verify_winner);
app.get('/download',auth,routes.download);
app.post('/download',auth,routes.download_card);
app.get('/winner',auth,routes.winner);

app.io.route('lucky',routes.socket_lucky);

app.listen(3000);

app.post('/login',
		passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
		function(req,res){
			res.redirect('/main');
		});