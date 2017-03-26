var express = require('express');
var app = express();
var path = require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', require('./routes').index);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(7777, function () {
      console.log('Example app listening on port 7777!');
});


