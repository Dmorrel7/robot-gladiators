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
            }
         
            else {
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
    // start the game when the page loads

    startGame();
  