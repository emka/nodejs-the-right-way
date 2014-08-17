#!/usr/bin/env node-harmony
'use strict';
const
	express = require('express'),
	morgan = require('morgan'),
	app = express();
app.use(morgan('dev'));

const config = {
	bookdb: 'http://localhost:5984/books/',
	b4db: 'http://localhost:5984/b4/'
};

require('./lib/field-search.js')(config, app);
require('./lib/bundle.js')(config, app);

app.listen(3000, function(){
	console.log("ready captain.");
});
