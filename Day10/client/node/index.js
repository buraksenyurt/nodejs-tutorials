const grpc = require('grpc');
const proto = grpc.load('./product.proto');
const client = new proto.products.ProductService('localhost:7500', grpc.credentials.createInsecure());

client.List({}, (error, response) => {
	if (!error) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});

client.get({ id: 1001 }, (error, response) => {
	if (!error) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});

client.Insert({ id: 1001, name: "Scrum Post-It Kağıdı", listPrice: 5 }, (error, response) => {
	if (!error) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});