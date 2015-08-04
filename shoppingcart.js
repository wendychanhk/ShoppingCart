var Item = function(fruit, price, quantity)
{
	this.fruit = fruit; 
	this.price = price; 
	this.quantity = quantity; 

	// try putting these if else in fucntion 

	if (fruit === "apple" && quantity % 2 === 0)
	{
		this.cost = (this.price*this.quantity)/2
	}

	else if (fruit === "apple" && quantity % 2 === 1)
	{
		this.cost = (this.price*(this.quantity-1))/2 + this.price
	}

	else if (fruit === "orange" && quantity == 10)
	{    
		this.cost = (this.price*5/2) + this.price*5
	}

	else if (fruit === "orange" && quantity >10 && quantity %10 !== 0 )
	{
		this.cost = this.price*(this.quantity - this.quantity%10)* 0.75 + (this.quantity%10)*this.price 
	}

	else if (fruit === "orange" && quantity >10 && quantity %10 === 0 )
	{
		this.cost = this.price*this.quantity* 0.75
	}
	else 
	{
		this.cost = this.price*this.quantity; 
	}; 

}; 



var ShoppingCart = function()
{
	this.list = []; 
}

ShoppingCart.prototype.addItem = function(item)
{
	this.list.push(item)
};



ShoppingCart.prototype.total = function()
{
	var sum  = 0 
	this.list.map(function(item) {
		sum +=item.cost;
	});


	var total_q = 0 
	this.list.map(function(item){
	total_q += item.quantity; 
	}); 

	if (total_q >= 5){
	return "Total price is: " + "$" + (sum*0.9).toString(); 
	}
	else{
	return "Total price is: " + "$" + sum.toString();
	}


	return ("Total price is: " + "$" + sum.toString());
}


	
var apple = new Item("apple", 10, 3); 
var banana = new Item("banana", 20, 4); 
var orange = new Item ("orange", 5, 5); 
var grapes = new Item ("grapes", 15, 7);
var watermelon = new Item ("watermelon", 50, 2); 


var cart1 = new ShoppingCart()
cart1.addItem(apple)
cart1.addItem(banana)
cart1.addItem(grapes)
cart1.addItem(watermelon)
cart1.addItem(orange)

console.log(cart1.list) // list is not a function, so it doesn't need to have () 
console.log(cart1.total()) // total is a function, must add () to call it 







var apple = new Item ("apple", 10, 9); 
var orange = new Item ("orange", 5, 11); 
var grapes = new Item ("grapes", 15, 7);
var banana = new Item ("banana", 20, 20); 
var watermelon = new Item ("watermelon", 50, 2); 

var cart2 = new ShoppingCart()
cart2.addItem(apple)
cart2.addItem(orange)
cart2.addItem(banana)
cart2.addItem(grapes)
cart2.addItem(watermelon)



console.log(cart2.list)
console.log(cart2.total())

