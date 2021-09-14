import Game from "./engine/game.js";

window.addEventListener('load', () => {
    let game = new Game(4);
    let view = new GameView(game);
    let body = document.querySelector("body");
    body.append(view.div);
    let controller = new GameController(game, view);
   

    
})