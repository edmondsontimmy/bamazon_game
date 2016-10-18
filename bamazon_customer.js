var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

// connection.connect(function(err) {
// 	if(err) {
// 		throw err;
// 	}

// 	console.log("connected as id", connection.threadId);
// });

// connection.query('SELECT * FROM Products', function(err, results) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(results);
// });


// prompt.start();

// purchasePrompt();

// function purchasePrompt() {
//     var purchase = {
//         properties: {
//             ItemId: {
//                 pattern: /^[a-zA-Z\s\-]+$/,
//                 warning: "Please enter valid Product ID",
//                 message: "\nID of product to purchase: ",
//                 required: true
//             },
//             quant: {
//                 validator: /[0-9]/,
//                 warning: "Please enter valid number",
//                 message: "\nQuantity to purchase: ",
//                 required: true
//             }
//         }
//     };
//     prompt.get(purchase, function (err, result) {
//         queryDB("SELECT * FROM Products WHERE ItemID=" + result.ItemId);
//         requestedProductId = result.ItemId;
//         requestedStock = result.quant;
//     });
// }

// executingthatcode

var execute = function(){

	connection.query("SELECT * FROM Products", function(err, result) {
		return (Table(result));
	  
	  });

	setTimeout(function() {
	    prompt.get(['ItemID', 'Quantity'], function (err, result) {
		    var shopperItem = result.ItemID;
		    var shopperQuantity =result.Quantity;

		    inventoryCheck(shopperItem, shopperQuantity);
		    setTimeout(function() {execute();}, 3500);

		});
	}, 750);
}


var inventoryCheck = function (id, quantity){
	connection.query('SELECT * FROM Products WHERE ItemID = ' + id, function (err, result){
		if (err) throw err;

		var total = result[0].Price * quantity;

		var inventory = result[0].Stock - quantity;

		if (inventory < 0){
			console.log('Insufficient stock. There are only '+ result[0].Stock + 'item(s) left.');
		} else {
			console.log('You have bought ' + quantity + ' ' + result[0].ProductName + '(s) for $' + total);
			console.log('There are ' + inventory + ' ' + result[0].ProductName + '(s) remaining.')
			databaseUpdate(id, inventory)
		}
	});
}


var databaseUpdate = function(id, quantity){
	connection.query('update products set StockQuantity = ' + quantity + ' where ItemID = ' + id, function(err, result) {
        if (err) throw err;
    });
}
 

function Table(items){
	for (var i = 0; i < items.length; i++) {
		console.log('------------------------');
		console.log('ItemID: ' + items[i].ItemID);
		console.log('Item: ' + items[i].ProductName);
		console.log('Department: ' + items[i].DepartmentName);
		console.log('Price: $' + items[i].Price);
	}
	console.log('------------------------');
}


// Connecting to the Bamazon Database
connection.connect(function(err) {
    if (err) {
		console.error('error connecting: ' + err);
	    return;
	}
});

execute();