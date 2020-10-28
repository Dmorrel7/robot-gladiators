var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 49;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 8;

var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose" );
        
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    //Subtract the value of playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        //award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};  
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 49;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that aarrays start at 0 so it needs to have 1 added
            alert("Welcome to Robot Gladiators! Round" + ( i + 1 ) );

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array
            if(playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = confirm ("The fight is over, visit the store before the next round?");
                
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
            
            }else {
                alert("You have lsot your robot in battle! Game Over!");
                break;
            }
        }
        
        endGame();
    };
    
    // function to end the entire game
    var endGame = function() {
        // if player is still alive, player wins!
        if (playerHealth > 0) {
            alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } else {
            alert("You've lost your robot in battle.");
        }
        var playAgainConfirm = confirm("Would you like to play again?");

        if(playAgainConfirm) {
            startGame();
        } else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }

    var shop = function() {
        // ask player what they'd like to do
        var shopOptionPrompt = prompt("Would you liek to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        // use switch to carry out action
        switch(shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if(playerMoney >= 7) {
                    alert("Refilling player's health by 20 for 7 dollars.");

                    // increase health and decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                } else {
                    alert("You don't have enough money!");
                }

                break;
            case "UPGRADE":    
            case "upgrade":
                if (playerMoney >= 7) {
                    alert("Upgrading player's attack by 6 for 7 dollars.");

                    //increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                } else {
                    alert("you don't have enough money!");
                }
                break;
            case "LEAVE":
            case "leave":
                alert("Leaving the store.");

                // do nothing, so function will end
                break;
            default:
                alert("You did not pick a valid option. Try again");


                // call shop() again to force player to pick a valid option
                shop();
                break;
        }
    };
    // start the game when the page loads

    startGame();
  