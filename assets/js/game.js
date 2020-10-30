
var fightOrSkip = function() {
    // asking player if they'd like to fight or skip using the fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose" );

    // conditional recursive function
    if (promptFight === "" || promptFight === null) {
        alert("You need to provide a valid answer! Please try again!");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        
        return true;

    }
}
        return false;
}

var fight = function(enemy) {

    while(enemy.health > 0 && playerInfo.health > 0) {
        if (fightOrSkip()) {
            // if true, leave fight by checking loop
            break;
        }
       
    //Subtract the value of playerAttack from enemy.health
    // generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    //Subtract the value enemy.attack from playerHealth
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

    // check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } 
};  

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min + 1) + min);
  
    return value;
  };

  //function to set name
  var getPlayerName = function() {
      var name = "";
      while (name === "" || name === null) {
          name = prompt("What is your robot's name?")
      }
      return name;
  };

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        } else {
            alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else  {
            alert("You don't have enough money!");
        }
    }
};
//You can also log multiple values at once like this
console.log( playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that aarrays start at 0 so it needs to have 1 added
            alert("Welcome to Robot Gladiators! Round" + ( i + 1 ) );

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
        if (playerInfo.health > 0) {
            alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
        var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: '1 to refill', '2 to upgrade', or '3 to leave' to make a choice.");
        // use switch to carry out action
        shopOptionPrompt = parseInt(shopOptionPrompt);
        switch(shopOptionPrompt) {
            case 1:      
                playerInfo.refillHealth();
                break;
            case 2:    
                playerInfo.upgradeAttack();
                break;
            case 3:
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
  