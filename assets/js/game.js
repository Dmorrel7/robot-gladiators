var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 30;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 100;

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
  