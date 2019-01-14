var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;

  console.table(res);

   inquirer
    .prompt([
    	{
     	 name: "productId",
     	 type: "input",
     	 message: "Choose the ID-number of the product you would like to buy?"
      },
      {
    	 name:"unitQuant",
    	 type:"input",
    	 message: "How many items of the product would you like to buy?"
   		}
    ])
     .then(function(answer) {
       var chosenId;
       for (var i = 0; i < res.length; i++){
        if(res[i].id == answer.productId){
          chosenId=res[i];
          nameofId=res[i].product_name;
          console.log("id is "+chosenId.id+", product name is "+ nameofId);
        }
       };  
       if(chosenId.stock_quantity >= answer.unitQuant){
        var totalSum= answer.unitQuant*chosenId.price;
        console.log("total cost for " + answer.unitQuant + " of " +nameofId+" is "+totalSum)
       }
       else{console.log("Insufficient quantity!"); start()};
     })
    })
    endConnection()
  };
  function endConnection(){
      connection.end();
  };
