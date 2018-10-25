const grpc = require('grpc');
const proto = grpc.load('./product.proto');
const server = new grpc.Server();
const product = require('./Product');

function allProducts() {
	console.log('[Server]:List all product');

	var products = [
		{ id: 1009, name: "lego mind storm", listPrice: 1499 },
		{ id: 1010, name: "star wars bardak altığı", listPrice: 35 },
		{ id: 1011, name: "ışıldak 40w", listPrice: 85.50 },
		{ id: 1012, name: "A4 X 100 adet", listPrice: 5 }
	];
	return products;
}
function singleProduct(productId) {
	console.log('[Server]:Get single product');
	console.log('[Server]:Incoming product id ' + productId);

	var product = {
		id: 1009,
		name: "lego mind storm",
		listPrice: 55
	};
	return product;
}
function addProduct(call) {
	console.log('[Server]:Insert new product');

	let p = new product(
		call.request.id,
		call.request.name,
		call.request.listPrice,
	);
	console.log(p);
}
function list(call, callback) {
	callback(null, allProducts());
}
function single(call, callback) {
	callback(null, singleProduct(call.request.id));
}

function insert(call, callback) {
	callback(null, addProduct(call));
}

server.addService(proto.products.ProductService.service, {
	List: list,
	Insert: insert,
	Get: single
});

server.bind('0.0.0.0:7500', grpc.ServerCredentials.createInsecure());
server.start();
console.log('grpc server is live', '0.0.0.0:7500');