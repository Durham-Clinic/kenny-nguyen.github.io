	
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
		organic: false,
		price: 2.00
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
    },
    {
        name: "Eggs",
        vegetarian: false,
		glutenFree: true,
		organic: false,
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
		organic: false,
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
		organic: false,
        price: 4.00
    },
    {
        name: "Ground Beef",
        vegetarian: false,
		glutenFree: true,
		organic: false,
        price: 10.00
    },
    {
        name: "Chicken Breast",
        vegetarian: false,
		glutenFree: true,
		organic: false,
        price: 10.00
    }
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (restriction == "None"){
			product_names.push([prods[i].name, prods[i].price]);	
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "GlutenFree and Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Vegetarian and Organic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
	}
	
	//Sort products by increasing prince (low to high)
	//Code taken from https://stackoverflow.com/a/50415269
	return product_names.sort(function([a,b], [c,d]){
		return b-d;
	});;
}


// checks if Organic produce is requested and updates the list of products accordingly. Option is for checkbox.
/*function OrganicCheck(checkboxElem){
	var text1=document.getElementById("text1")
	if (checkboxElem.checked){
		text1.style.display="block"
		//Need to be able to update list when Organic is selected.
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
