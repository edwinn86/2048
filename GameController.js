let GameController = class {
    constructor(game, view){

    
        game.onMove(view.renderGame);

        view.addListener(function () {
            document.getElementById('resetButton').addEventListener("click", function(){
                game.setupNewGame();
                view.renderGame();

                document.getElementById('loseDiv').remove();
            })
        });

        game.onMove( function () {
            document.getElementById('resetButton').addEventListener("click", function(){
                game.setupNewGame();
                view.renderGame();
            })
        });

        game.onLose(function (){
            let loseDiv = document.createElement('div');
            loseDiv.setAttribute('id', 'loseDiv');
            loseDiv.innerHTML = `<h7>Sorry! You lost!</h7>`
            document.querySelector("body").append(loseDiv);
        })

        game.onWin(function (){
            let loseDiv = document.createElement('div');
            loseDiv.setAttribute('id', 'loseDiv');
            loseDiv.innerHTML = `<h8>YOU WON!\nKeep going to increase your score! </h8>`
            document.querySelector("body").append(loseDiv);
        })

        document.getElementById('resetButton').addEventListener("click", function(){
           game.setupNewGame();
           view.renderGame();
        })
        

        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
              return; // Do nothing if the event was already processed
            }
          
            switch (event.key) {
              
              case "ArrowDown": game.move("down");
                break;
              case "ArrowUp": game.move("up");
                break;
              case "ArrowLeft": game.move("left");
                break;
              case "ArrowRight": game.move("right");
                break;
              default:
                return; 
            }
          
            
            event.preventDefault();
          }, true);
        
     
        
    }
}