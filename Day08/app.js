const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(morgan('tiny')); 
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];
const bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books', bookRouter);

app.listen(port, function () {
	debug(`listening on port ${chalk.green(port)}`);
})