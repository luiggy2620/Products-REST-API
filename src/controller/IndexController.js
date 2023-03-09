const IndexController = {};

IndexController.sendMainInfo = (request, response) => {
	response.json({
		server: 'PRODUCTS REST API'
	});
};

export default IndexController;
