const readline = require("readline-sync");
const characterName = readline.question("Welcome to the Colossal Adventure RPG! Name your character! "); 
console.log(`You are ${characterName}, Advernturer of Agamon!`);

let willContinue = true;

class Character{
    constructor(name, healthPoints, attackPoints, inventory){
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = attackPoints
    this.inventory = inventory
  }
  printInventory(){
    console.log (`Invetory: ${this.inventory}`)
  }
}

let playerInventory = ["Bow of Agility", " Sword of Honor", " Axe of Strength", " Necklace of Vitality "]

let hero = new Character(characterName, 100, 10, playerInventory)
let enemy1 = new Character ("Goblin", 20, 4, [" Goblin Dagger", " Gold Coin"]);
let enemy2 = new Character ("Werewolf", 30, 6, [" Wolf Claw", " Meat"]);
let enemy3 = new Character ("Minotaur", 45, 10, [" Broken Horn", " Cloth"]);

let enemies = [enemy1, enemy2, enemy3];

const chance = (min,max) => {
    return Math.floor(Math.random()* (max - min + 1) + min);
};

const attackChance = (max) => {
    return Math.floor(Math.random() * max);
};

const attackDamage = (x, y) => {
    return x -= y; 
};

let heroHP = hero.healthPoints;

while (willContinue === true) {
 index = readline.keyIn("Press [w] to walk, [i] to check invetory, or [q] to quit ", {limit: ["w", "i", "q"] }
);

if (index === "w"){
    console.log("You walk forward");

    let encounter = chance(1, 3);
    console.log(encounter);

    if (encounter === 3) {
        let randomEnemy = Math.floor(Math.random() * enemies.length);
        let enemy = enemies[randomEnemy];
        let enemyHP = enemy.healthPoints;
        console.log(`A wild`, enemy.name, `appears!`);
        console.log(enemy);
        let inFight = true;

        while (inFight === true){
            let npcDMG = attackChance(enemy.attackPoints);
            let heroDMG = attackChance(hero.attackPoints);
        fightOrEscape = readline.keyIn("Do you chose to Fight the enemy [f]? Or Escape [e] ", {limit: ["f", "e"] }
        );          
            if (fightOrEscape === "e"){
            console.log("You attempt to escape!");
            
            let escapeChance = chance(1, 2);
            console.log(escapeChance);
            if (escapeChance === 2) {
                console.log("You have escaped!");
                inFight = false;
            } if (escapeChance === 1) {
                console.log("You couldnt get away!");
                console.log(`You are attacked for`, npcDMG,`damage! You have`, attackDamage(heroHP, npcDMG), `HP left!`);
                heroHP -= npcDMG;
                inFight = true;
              
            
                
            }
        } if (fightOrEscape === "f"){
            console.log("You choose to fight!");
            console.log(`You are attacked for`, npcDMG,`damage! You have`, attackDamage(heroHP, npcDMG), `HP left!`);
            heroHP -= npcDMG;
           console.log(`You attack for`, heroDMG, `damage! The`, enemy.name, `has`, attackDamage(enemyHP, heroDMG), `HP left` );
            enemyHP -= heroDMG;
            if(heroHP <= 0){
                console.log(`YOU DIED`);
                inFight = false
                willContinue = false;
            } else if (enemyHP <= 0){
                console.log(`Congratulations! you have defeated`, enemy.name, `You pick up`, enemy.inventory);
                hero.inventory.push (enemy.inventory);
                hero.printInventory()
                inFight = false;
            }
        }
         }
    }

}   else if (index === "i"){
     console.log("You Check your Inventory");
     hero.printInventory();
     console.log(heroHP)
     

}   else if (index === "q"){
     console.log("You quit the game");
     willContinue = false;
} 
}
