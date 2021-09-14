export {Game as default}

let Game = function (gameSize) {

    let genNextArr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
    let genNext = function() {
        let num = Math.floor(Math.random() * 10);

        return genNextArr[num];
    }

    let insertNext = function () {
        if(gameOccup == gameTotalSize){
            console.log('Game is full! Game over!');
            return;
        }
        let inserted = false;

        while(!inserted) {
            let insertIndex = Math.floor(Math.random() * gameTotalSize);
            if(gameArray[insertIndex] == 0){
                gameArray[insertIndex] = genNext();

                inserted = true;
                gameOccup +=1;
            }
            
        }
        
       
    }


    
    let gameWidth = gameSize;
    this.getWidth = function () {
        return gameWidth;
    }
    let gameHeight = gameSize;
    this.getHeight = function () {
        return gameHeight;
    }
    
    let gameTotalSize = gameWidth * gameHeight;
    let gameOccup = 0;

    let gameArray = [];
 

    for(let i=0; i<gameTotalSize; i++){
        gameArray.push(0);
    }
    insertNext();
    insertNext();

    this.getArrayCell = function (index) {
        
        return gameArray[index];
    }
    
    let gameState = {
        
        board: gameArray,
        score: 0,
        won: false,
        over: false

    }



    this.setupNewGame = function(){
        
        gameArray = [];
        for(let i=0; i<gameTotalSize; i++){
            gameArray.push(0);
        }

        gameState = {
        
            board: gameArray,
            score: 0,
            won: false,
            over: false
    
        }


        gameOccup = 0;
        insertNext();
        insertNext();

    }

    this.loadGame = function (newGameState) {

        gameState = newGameState;
        gameArray = gameState.board;
        gameWidth = Math.sqrt(gameArray.length);
        gameHeight = Math.sqrt(gameArray.length);
        
        gameTotalSize = gameArray.length;
        gameOccup = 0;

        for(let i=0; i<gameTotalSize; i++){
            if(gameArray[i] != 0){
                gameOccup +=1;
            }
        }

    }

    


    this.move = function(direction){
        if(gameState.over){
            return;
        }


        let copyArray = [...gameArray];

        if(direction == "right"){

            for(let z=0; z<gameTotalSize; z += gameWidth){
                for(let i=z+gameWidth-1; i>z; i--){
                   
                    if(gameArray[i] == 0){
                        let foundNonZero = false;
                        for(let y=i-1; y>=z; y--){
                            if(gameArray[y] != 0){
                                gameArray[i] = gameArray[y];
                                gameArray[y] = 0;
                                foundNonZero = true;
                                break;
                            }
                        }
    
                        if(!foundNonZero){
                            break;
                        }
                    }
    
                    if(gameArray[i-1] == 0){
    
                        for(let y=i-2; y>=z; y--){
                            if(gameArray[y] == gameArray[i]){
                                gameArray[i] = gameArray[i] + gameArray[y];
                                gameArray[y] = 0;
                                gameOccup -= 1;
                                gameState.score += gameArray[i];
                                break;
                            }
    
                            if(gameArray[y] != 0 && gameArray[y] != gameArray[i]){
                                gameArray[i-1] = gameArray[y];
                                gameArray[y] = 0;
                                break;
                            }
                        }
    
                    } else if(gameArray[i-1] == gameArray[i]){
                        gameArray[i] = gameArray[i] + gameArray[i];
                        gameArray[i - 1] = 0;
                        gameState.score += gameArray[i];
                        gameOccup -= 1;
                    
    
                    } else {
                        continue;
                    }
    
    
                }
    
            
            }
    
           
    
        } else if(direction == "left"){
            for(let z=0; z<gameTotalSize; z += gameWidth){
                for(let i=z; i<z+gameWidth-1; i++){
                   
                    if(gameArray[i] == 0){
                        let foundNonZero = false;
                        for(let y=i+1; y<z+gameWidth; y++){
                            if(gameArray[y] != 0){
                                gameArray[i] = gameArray[y];
                                gameArray[y] = 0;
                                foundNonZero = true;
                                break;
                            }
                        }
    
                        if(!foundNonZero){
                            break;
                        }
                    }
    
                    if(gameArray[i+1] == 0){
    
                        for(let y=i+2; y<z+gameWidth; y++){
                            if(gameArray[y] == gameArray[i]){
                                gameArray[i] = gameArray[i] + gameArray[y];
                                gameArray[y] = 0;
                                gameOccup -= 1;
                                gameState.score += gameArray[i];
                                break;
                            }
    
                            if(gameArray[y] != 0 && gameArray[y] != gameArray[i]){
                                gameArray[i+1] = gameArray[y];
                                gameArray[y] = 0;
                                break;
                            }
                        }
    
                    } else if(gameArray[i+1] == gameArray[i]){
                        gameArray[i] = gameArray[i] + gameArray[i];
                        gameArray[i + 1] = 0;
                        gameState.score += gameArray[i];
                        gameOccup -= 1;
    
                    } else {
                        continue;
                    }
    
    
                }
    
              
            }
    
    
            
    
        } else if(direction == "up"){
    
        
    
            for(let z=0; z<gameWidth; z ++){
                for(let i=z; i< z+ gameWidth * (gameWidth-1); i+=gameWidth){
                   
                    if(gameArray[i] == 0){
                        let foundNonZero = false;
                        for(let y=i+gameWidth; y<= z + (gameWidth * (gameWidth-1)); y+=gameWidth){
                            if(gameArray[y] != 0){
                                gameArray[i] = gameArray[y];
                                gameArray[y] = 0;
                                foundNonZero = true;
                                break;
                            }
                        }
    
                        if(!foundNonZero){
                            break;
                        }
                    }
    
                    if(gameArray[i+gameWidth] == 0){
    
                        for(let y=i+(gameWidth*2); y<=z + gameWidth*(gameWidth-1); y+=gameWidth){
                            if(gameArray[y] == gameArray[i]){
                                gameArray[i] = gameArray[i] + gameArray[y];
                                gameArray[y] = 0;
                                gameOccup -= 1;
                                gameState.score += gameArray[i];
                                break;
                            }
    
                            if(gameArray[y] != 0 && gameArray[y] != gameArray[i]){
                                gameArray[i+gameWidth] = gameArray[y];
                                gameArray[y] = 0;
                                break;
                            }
                        }
    
                    } else if(gameArray[i+gameWidth] == gameArray[i]){
                        gameArray[i] = gameArray[i] + gameArray[i];
                        gameArray[i + gameWidth] = 0;
                        gameState.score += gameArray[i];
                        gameOccup -= 1;
    
                    } else {
                        continue;
                    }
    
    
                }
    
              
            }
        } else if(direction == "down"){
    
            for(let z=gameWidth * (gameWidth-1); z< (gameWidth * (gameWidth-1))+gameWidth; z++){
                for(let i=z; i >= z - gameWidth * (gameWidth-1); i-=gameWidth){
                   
                    if(gameArray[i] == 0){
                        let foundNonZero = false;
                        for(let y=i-gameWidth; y>= z - (gameWidth * (gameWidth-1)); y-=gameWidth){
                            if(gameArray[y] != 0){
                                gameArray[i] = gameArray[y];
                                gameArray[y] = 0;
                                foundNonZero = true;
                                break;
                            }
                        }
    
                        if(!foundNonZero){
                            break;
                        }
                    }
    
                    if(gameArray[i-gameWidth] == 0){
    
                        for(let y=i-(gameWidth*2); y>=z - gameWidth*(gameWidth-1); y-=gameWidth){
                            if(gameArray[y] == gameArray[i]){
                                gameArray[i] = gameArray[i] + gameArray[y];
                                gameArray[y] = 0;
                                gameOccup -= 1;
                                gameState.score += gameArray[i];
                                break;
                            }
    
                            if(gameArray[y] != 0 && gameArray[y] != gameArray[i]){
                                gameArray[i-gameWidth] = gameArray[y];
                                gameArray[y] = 0;
                                break;
                            }
                        }
    
                    } else if(gameArray[i-gameWidth] == gameArray[i]){
                        gameArray[i] = gameArray[i] + gameArray[i];
                        gameArray[i - gameWidth] = 0;
                        gameState.score += gameArray[i];
                        gameOccup -= 1;
                    
    
                    } else {
                        continue;
                    }
    
    
                }
    
              
            }
        } 
        
        //check for legal move and win
        let arraySame = true;

        for(let i=0; i<gameTotalSize; i++){
            if (copyArray[i] != gameArray[i]){
                arraySame = false;
         
            }

            if(gameArray[i] == 2048 && !gameState.won){
                gameState.won = true;
                moveUpdate();
                winUpdate();
                return;
            }
        }

        if(!arraySame){
            insertNext();
            moveUpdate();
        }

        //check for loss
        if(gameOccup == gameTotalSize){
            let noNextMove = true;
            
            for(let z=0; z<gameTotalSize; z += gameHeight){
                let rowArray = [];
                for(let i=z; i<z+gameWidth; i++){
                    

                    rowArray.push(gameArray[i]);

                }

                for(let i=0; i<gameWidth-1; i++){
                    if(rowArray[i] == rowArray[i+1]){
                        noNextMove = false;
                    }
                }

            }

            for(let z=0; z<gameWidth; z++){
                let colArray = [];
                for(let i=z; i<=z+gameWidth * (gameWidth-1); i+=gameWidth){
                    

                    colArray.push(gameArray[i]);

                }

                for(let i=0; i<gameWidth-1; i++){
                    if(colArray[i] == colArray[i+1]){
                        noNextMove = false;
                    }
                }

            }


            if(noNextMove){
                gameState.over = true;
                loseUpdate();
            }
        }

    }




    let moveListeners = [];
    this.onMove = function (callback) {

        moveListeners.push(callback);

    }
    let moveUpdate = () => {

        moveListeners.forEach((listener) => {

            listener(gameState);

        })
    }

    let winListeners = [];
    this.onWin = function (callback){

        winListeners.push(callback);

    }

    let winUpdate = () => {

        winListeners.forEach((listener) => {
            listener(gameState);
        })
    }

    let loseListeners = [];
    this.onLose = function (callback){

        loseListeners.push(callback);

    }

    let loseUpdate = () => {

        loseListeners.forEach((listener) => {
            listener(gameState);
        })
    }

    this.toString = function () {
        let string = "\n";
        let counter = 0;
        for(let i=0; i<gameHeight; i++){
            if(i>0){
                string += '\n'
            }
            for(let j=0; j<gameWidth; j++){

                string += `[${gameArray[counter]}]`;
                counter++;
            }
        }

        return string;
    }

    this.getGameState = function () {
        return gameState;
    }

    
}