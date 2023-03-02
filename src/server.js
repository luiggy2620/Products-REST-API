const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.get('/', (request, response) => {
	response.send({
		message: 'hello'
	});
});

module.exports = app;
