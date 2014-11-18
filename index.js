var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.listen(3000);
