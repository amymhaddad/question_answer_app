const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const { handleErrors } = require('./data/middlewares/Middleware');
const cors = require('cors');

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
	cors({
		origin: 'http://localhost:3001',
		exposedHeaders: true,
		credentials: true,
		methods: [ 'POST', 'PUT', 'GET', 'OPTIONS', 'HEAD' ],
		exposedHeaders: [ 'Content-Type', 'Authorization', 'Cookie' ],
		preflightContinue: false
	})
);

app.use('/api', apiRouter);

app.use(handleErrors);

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
