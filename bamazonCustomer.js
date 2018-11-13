//Running this application will first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale.

//The first should ask them the ID of the product they would like to buy.

//The second message should ask how many units of the product they would like to buy.


var mysql = require("mysql");
var inquier=require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
connection.query("SELECT * FROM products", function(err, results) {
	if (err) throw err;

  inquirer
    .prompt([
    	{
     	 name: "productId",
     	 type: "input",
     	 message: "Give me the ID-number of the product you would like to buy"
    	},
    	{
    	 name:"unitQuant",
    	 type:"input",
    	 message: "How many items of the product would you like to buy"
   		}
    ])
     .then(function(answer) {
     	var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === answer.productId) {
            chosenItem = results[i];
          }
        }  
        if (answer.unitQuant.parseInt() <= chosenItem.stock_quantity){
        	var remainder=chosenItem.stock_quantity - answer.unitQuant.parseInt();
        	chosenItem.stock_quantity =remainder;
        	//change Mysql number???HOOOOW
        	var totalPrice = answer.unitQuant.parseInt() * chosenItem.price;
        	console.log("totalPrice: "+totalPrice);
        }
        else{
        	console.log("Insufficient quantity!");
        	//then prevent the order from going through HOOOOW???
        }

     })
});


