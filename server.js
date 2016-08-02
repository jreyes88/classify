// express package
var express = require('express');
var routes = require('./controllers/classify-controller.js');
// set up express app
var app = express();
app.use('/', routes);

// dependencies for post requests
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// load stylesheets, imgs, etc.
app.use(express.static(process.cwd() + '/public'));

// parse incoming responses into body
app.use(bodyParser.urlencoded({
	extended: true
}));

// hack the http form methods to be more than GET and POST
app.use(methodOverride('_method'));

// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// handlebars
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
var exphbs = require('express-handlebars');
// sets the 'main.handlebars' file to be the default
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// set up the Express Server (app) to listen using the 'process.env.PORT' value (aka, the one Heroku assigns, I assume) or PORT 8000
var PORT = 8080;
app.listen(PORT, function() {
    console.log("server listening on port: " + PORT);
});
