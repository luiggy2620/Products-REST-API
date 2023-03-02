require('dotenv').config();
require('./database');

const server = require('./server');

server.listen(server.get('port'), () => {
	console.log(`server on port ${server.get('port')}`);
});
