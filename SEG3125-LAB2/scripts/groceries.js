	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.00
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
    },
    {
        name: "Eggs",
        vegetarian: false,
        glutenFree: true,
        price: 2.50
    },
    {
        name: "Organic Apple",
        vegetarian: true,
		glutenFree: true,
		organic: true,
        price: 1.00
    },
    {
        name: "Nutella",
        vegetarian: true,
        glutenFree: true,
        price: 5.00
    },
    {
        name: "Organic Spinach",
        vegetarian: true,
		glutenFree: true,
		organic: true,
        price: 5.00
    },
    {
        name: "Frosted Flakes",
        vegetarian: true,
        glutenFree: true,
        price: 4.00
    },
    {
        name: "Ground Beef",
        vegetarian: false,
        glutenFree: true,
        price: 10.00
    },
    {
        name: "Chicken Breast",
        vegetarian: false,
        glutenFree: true,
        price: 10.00
    }
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
	}
	return product_names.sort();
}

// checks if organic produce is requested and updates the list of products accordingly. Option is for checkbox.
/*function organicCheck(checkboxElem){
	var text1=document.getElementById("text1")
	if (checkboxElem.checked){
		text1.style.display="block"
		//Need to be able to update list when organic is selected.
	}
	else{
		text1.style.display="none";
	}
}*/ 

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
