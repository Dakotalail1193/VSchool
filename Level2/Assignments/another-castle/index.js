let names = ['Mario', 'Luigi']
const namePick = Math.floor(Math.random()* names.length)

class Mariobros {
    constructor(name, totalCoins, status, hasStar ){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.playing = true
    }
    player(namepicked){
        this.name = namepicked
    }       


     gotHit() {
        if(this.hasStar){
            this.hasStar = false
            return
        }else if(this.status === "Powered up"){
            this.status = "Big";
        }else if(this.status === "Big"){
            this.status ="Small";
        }else if(this.status === "Small"){
            this.status = "Dead";
            this.playing = false; 
            "Game Over" 
        }      
            
  }

    
     gotPowerUp() {
        if(this.status ==="Small"){
             this.status = "Big";
        }else if(this.status ==="Big"){
             this.status = "Powered up";
        }else if(this.status ==="Powered up"){
             ["You recieved a Star!", this.hasStar = true]
            
                }
        }
    

     addCoin(){
        this.totalCoins++;
        
        }

    printCharacter(){
        console.log(`Name: ${this.name},
Total Coins: ${this.totalCoins},
Status: ${this.status},
Has Star: ${this.hasStar}
`)
    }
} 




    function playGame()  {
        let result = Math.floor(Math.random()* 3); 
        if (result === 0){
            player.gotHit()
            player.printCharacter() 
            
        } else if (result === 1){
            player.gotPowerUp()
            player.printCharacter()
            
        } else if (result === 2){
            player.addCoin()
            player.printCharacter()
            
        } 
        if(!player.playing){
            clearInterval(play)
        }     
          }; 
 
let player = new Mariobros((namePick, names[namePick]), 0, 'Small', false)       
const play = setInterval(playGame, 1000)



    //  const interval = setInterval(() => console.log(playGame(0, 2)), 1000);
 
    //  function stop() {
    //       clearInterval(interval)};
 
    //   setTimeout(stop, 10000);

        
 




 
 