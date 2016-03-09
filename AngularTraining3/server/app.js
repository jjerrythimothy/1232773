var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var MY_PORT = 8085;
app.listen(process.env.PORT || MY_PORT);