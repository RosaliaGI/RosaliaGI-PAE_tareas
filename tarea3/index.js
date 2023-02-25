const express = require('express');
const routes = require('./src/routes');

const { engine } = require('express-handlebars');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(express.static('dist'));

const port = 3000;

app.use('', routes);

app.listen(port, function () {
    console.log('app is running in port ' + port)
});