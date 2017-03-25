var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);

app.listen(7777, function () {
      console.log('Example app listening on port 7777!');
});


