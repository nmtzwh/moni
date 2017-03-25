var injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

exports.index = function(req, res){
  res.render('index', { name: 'John', title: 'hello' });
};
