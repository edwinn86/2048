let GameView = class {
    constructor(model) {
        this.model = model;
        this.div = document.createElement('div');
        
        let div2 = this.div;
        div2.setAttribute("id", "replaceable");

        //render initial board
        let counter = 0;
        let game_table = document.createElement('table');
        for (let r=0; r<model.getHeight(); r++) {
            let trow = document.createElement('tr');
            for (let c=0; c<model.getWidth(); c++) {
                let tcell = document.createElement('td');
                if(model.getArrayCell(counter) !=0){
                    let number = model.getArrayCell(counter);
                    tcell.innerHTML = `<h1>${number}</h1>`;

                    if(number == 2){
                        tcell.setAttribute("style", "background-color: #dadbd5");
                    } else if (number == 4){
                    
                        tcell.setAttribute("style", "background-color: #a5a6a2");
                    }

                 
                } else {
                    tcell.setAttribute("style", "background-color: #d1d0c2");
                }

                trow.append(tcell);
                counter++;
            }

            game_table.append(trow);
        }
        this.div.append(game_table);

          

        let column = document.createElement('div');
        column.setAttribute('class', 'columns');

        let score = document.createElement('div');
        score.setAttribute('id', 'scoreDiv');
        score.setAttribute('class', 'column');
        score.innerHTML = `<h6>Score: ${model.getGameState().score}</h6>`
        column.append(score);

        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'column');
        buttonDiv.setAttribute('id', 'buttonDiv');
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', 'resetButton');
        button.innerHTML = "Reset Game";

        buttonDiv.append(button);
        column.append(buttonDiv);


        this.div.append(column);
        this.div.setAttribute('id', 'replaceable');


        //listeners
        let listeners = [];

        this.addListener = function (listener){

            listeners.push(listener);

        }

        let update = () => {

            listeners.forEach((listener) => {
                listener();
            })
        }

        //re-render board on move
        
        this.renderGame = function () {
            counter = 0;
            game_table = document.createElement('table');
            for (let r=0; r<model.getHeight(); r++) {
                let trow = document.createElement('tr');
                for (let c=0; c<model.getWidth(); c++) {
                    let tcell = document.createElement('td');
                    if(model.getArrayCell(counter) !=0){
                        let number = model.getArrayCell(counter);
                        if(number < 10){
                            tcell.innerHTML = `<h1>${number}</h1>`;

                        } else if(number > 10 && number < 100){

                            tcell.innerHTML = `<h2>${number}</h2>`;
                        }else if(number > 100 && number < 1000){

                            tcell.innerHTML = `<h3>${number}</h3>`;
                        } else {
                            tcell.innerHTML = `<h4>${number}</h4>`;
                        }

                        if(number == 2){
                            tcell.setAttribute("style", "background-color: #dadbd5");
                        } else if (number == 4){
                            tcell.setAttribute("style", "background-color: #a5a6a2");
                        } else if (number == 8){
                            tcell.setAttribute("style", "background-color: #74b3ae");
                        } else if (number == 16){
                            tcell.setAttribute("style", "background-color: #1c9c84");
                        } else if (number == 32){
                            tcell.setAttribute("style", "background-color: #08c7a4");
                        } else if (number == 64){
                            tcell.setAttribute("style", "background-color: #14e3d3");
                        } else if (number == 128){
                            tcell.setAttribute("style", "background-color: #14b6e3");
                        } else if (number == 256){
                            tcell.setAttribute("style", "background-color: #1579d4");
                        }  else if (number == 512){
                            tcell.setAttribute("style", "background-color: #65f7c4");
                        }  else if (number == 1024){
                            tcell.setAttribute("style", "background-color: #20e834");
                        } else if (number == 2048){
                            tcell.setAttribute("style", "background-color: #ffdd70");
                        } 

                    
                    }  else { 
                            tcell.setAttribute("style", "background-color: #d1d0c2");
                    
                        }

                    trow.append(tcell);
                    counter++;
                }

                game_table.append(trow);
            }

            let newDiv = document.createElement('div');
            newDiv.append(game_table);

            let column = document.createElement('div');
            column.setAttribute('class', 'columns');

            let score = document.createElement('div');
            score.setAttribute('id', 'scoreDiv');
            score.setAttribute('class', 'column');
            score.innerHTML = `<h6>Score: ${model.getGameState().score}</h6>`
            column.append(score);

            let buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('class', 'column');
            buttonDiv.setAttribute('id', 'buttonDiv');
            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('id', 'resetButton');
            button.innerHTML = "Reset Game";

            buttonDiv.append(button);
            column.append(buttonDiv);


            newDiv.append(column);
           
            document.getElementById("replaceable").replaceWith(newDiv);
            newDiv.setAttribute('id', 'replaceable');

            update();
        
            
        }
        
    }
}