
/**
 * Module dependencies.
 */

var express = require('express.io')
  , http = require('http')
  , routes = require('./routes')
  , path = require('path');


var app = express();
app.http().io();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.locals.basedir = __dirname;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',routes.home);
app.get('/print',routes.print);
app.post('/print',routes.generate);

app.get('/sold',routes.sold);
app.post('/sold',routes.sold_card);
app.get('/verify',routes.verify);
app.post('/verify',routes.verify_winner);
app.get('/download',routes.download);
app.post('/download',routes.download_card);
app.get('/winner',routes.winner);

app.io.route('lucky',routes.socket_lucky);

app.listen(3000);

