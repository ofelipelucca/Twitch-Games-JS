import { Twitch_Connect } from "./twitch_connect.js";
import { HTML_Operator } from "./html_operator.js";
import { Game_TicTacToe } from "./twitch_game.js";

let twitch_connect = new Twitch_Connect();

let html_handler = new HTML_Operator();

html_handler.tela_conectar(innit_connect);

function innit_connect(canal) {
    
    twitch_connect.conectar(canal, html_handler);
}

let game_tictactoe = new Game_TicTacToe();

//function innit_game() {
//}