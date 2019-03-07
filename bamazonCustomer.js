//Makes application require these npm installs in order to run.
var mysql = require("mysql");
var inquirer = require("inquirer");

//creates the connection to the mysql database.
var con = mysql.createConnection ({
host: "localhost",
port: 8889,
user: "root",
password: "root",
database: "bamazon_db"
});

//displays error withh connection (if any), displays the connection id, and runs the start function.
con.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + con.threadId)

    start();
 });

function start() {
    //Prompts user if they would like to purchase an item or not.
inquirer
    .prompt ({
        name:"purchase",
        type: "list",
        message: "Would you like to [PURCHASE] an item?",
        choices:["PURCHASE","EXIT"]
    })
    .then(function(answer){
        //If the user selects purchase it will run the purchaseItem function and if not it will end the connection.
        if (answer.purchase === "PURCHASE"){
            displayInfo();
            setTimeout(purchaseItem,1500);
        }
        else{
            con.end();
        }
    })
};

//running a 
function purchaseItem(){
 
            inquirer.prompt([   
        { 
            //
            name: "itemBuying",
            type: "input",
            message: "choose the item you would like to purchase by selecting the ID number.",
            validate:  function(value){
                if (isNaN(value) === false){
                    return true;
                }
                return false;
            }          
         },
         {
             name: "howMuch",
             type: "input",
             message: "how many units would you like to purchase?",
             validate:  function(value){
                if (isNaN(value) === false){
                    return true;
                }
                return false;
         }
        },
        ]).then(function(answer){
         updateInfo(answer.howMuch, answer.itemBuying);
            console.log

        });
    };
    
function displayInfo(){
    //selects all values in the bamazon_productstable and displays the item_id and product_name.
    con.query("SELECT * FROM bamazon_products", function(err, res){
        if (err) throw err;
        for(i = 0; i < res.length; i++){   
            console.log (" || ID: " + res[i].item_id + " || Product Name:  " + res[i].product_name + "   || Price: $ " + res[i].price + ".00  || Stock: " + res[i].stock_quantity );
            
        };
    }
    )};

    var total = 0;
    function totalCost(amountBought, cost) {
        total += amountBought * cost;
    }

    function updateInfo(unitsBought, itemId){
        con.query("UPDATE bamazon_products SET stock_quantity = stock_quantity - ? WHERE item_id =?"
        ,[unitsBought, itemId], function(err,res){
            if (err) throw err;
        });

   con.query("SELECT price FROM bamazon_products WHERE item_id =?", 
   [itemId], function(err, res){
    totalCost(parseInt(unitsBought),parseInt(res[0].price))
    console.log ("Total Spendings: " + "$ " + total + ".00")
   });
  
    inquirer
      .prompt({
        name: "continue",
        type: "list",
        message: "Would you like to continue shopping?",
        choices: ["I'm already on a roll!", "No thanks! my pockets aren't that deep."]
  
      }).then(function(answer) {
  
        if(answer.continue == "I'm already on a roll!"){
          displayInfo();
          setTimeout(purchaseItem, 1000);
        } else {
          console.log("Your Total is: " + "$" + total + ".00");
          con.end();
        }   
      });
  
  };
