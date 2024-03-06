export class Twitch_Message_Handler {
    constructor() {
        this.mensagens = [];
        this.limite_mensagens = 100;
        return this;
    }

    exibirMensagem(nome, mensagem) {
        let div_chat_twitch = document.getElementById('ChatTwitch');        
        
        let nova_mensagem = document.createElement('div');

        nova_mensagem.classList.add('Mensagem');

        nova_mensagem.innerHTML = `(${nome}): ${mensagem}`;

        div_chat_twitch.appendChild(nova_mensagem);

        div_chat_twitch.scrollTop = div_chat_twitch.scrollHeight;

        this.mensagens.push(nova_mensagem);

        if (this.mensagens.length > this.limite_mensagens) {
            div_chat_twitch.removeChild(this.mensagens.shift());
        }
    }
}