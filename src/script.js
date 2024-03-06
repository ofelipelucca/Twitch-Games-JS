import { Twitch_Connect } from "./twitch_connect.js";
import { Twitch_Message_Handler } from "./twitch_message_handler.js";

document.getElementById('controles-botao-conectar').addEventListener("click", function() {
    let canal = document.getElementById('controles-input-canal').value;

    innit_connect(canal);
});

//document.getElementById('controles-botao-jogar').addEventListener("click", function() {
//
//    innit_game();
//});

function innit_connect(canal) {
    let twitch_connect = new Twitch_Connect();
    let message_handler = new Twitch_Message_Handler();
    
    twitch_connect.conectar(canal, message_handler);
}

function innit_game() {

}