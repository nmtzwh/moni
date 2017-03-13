var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});

