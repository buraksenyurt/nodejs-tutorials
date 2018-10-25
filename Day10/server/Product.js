let product=class Product {
	constructor(id,name,listPrice) {
		this._id = id;
		this._name=name;
		this._listPrice=listPrice;
	}
	get ProductId(){
		return this._id;
	}
	get Name() {
		return this._name;
	}
	get ListPrice() {
		return this._listPrice;
	}
	set Id(value)
	{
		this._Id=value;
	}
	set Name(value) {
		this._name=value;
	}
	set ListPrice(value) {
		this._listPrice=value;
	}
}

module.exports=product;