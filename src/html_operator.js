export class HTML_Operator {
    constructor() {
        this.mensagens = [];
        this.limite_mensagens = 100;
        return this;
    }

    exibir_mensagem(nome, mensagem) {
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

    tela_conectar(innit_connect) {

        // todo: voltar a tela de inicio

        //<input type="text" id="controles-input-canal"><button id="controles-botao-conectar">Conectar</button>

        let div_container_canal = document.getElementById('container-canal');

        // todo: esvaziar a div

        let input_canal = document.createElement('input');
        let botao_conectar = document.createElement('button');

        input_canal.setAttribute("id", "controles-input-canal");
        botao_conectar.setAttribute("id", "controles-botao-conectar");

        botao_conectar.innerHTML = "Conectar";

        botao_conectar.addEventListener("click", function() {
            let canal = document.getElementById('controles-input-canal').value;

            innit_connect(canal);
        });

        div_container_canal.appendChild(input_canal);
        div_container_canal.appendChild(botao_conectar);
    }

    tela_conectado(channel_name) {
        let div_container_canal = document.getElementById('container-canal');

        let input_canal = document.getElementById('controles-input-canal');
        let botao_conectar = document.getElementById('controles-botao-conectar');

        div_container_canal.removeChild(input_canal);
        div_container_canal.removeChild(botao_conectar);

        let texto_conectado = document.createElement('span');
        let botao_jogar = document.createElement('button');
        let botao_mudar_chat = document.createElement('button');
        
        texto_conectado.setAttribute("id", "controles-texto");
        botao_jogar.setAttribute("id", "controles-botao-jogar");
        botao_mudar_chat.setAttribute("id", "controles-botao-mudar-canal");

        texto_conectado.innerHTML = `Conectado a: ${channel_name}.`;
        botao_jogar.innerHTML = "Jogar!";
        botao_mudar_chat.innerHTML = "Mudar canal";

        botao_jogar.addEventListener("click", function() {

            if (!twitch_connect.conectado) return console.error("Não está conectado ainda..."); 
            
            innit_game(quantidade_de_rodadas);
            tela_jogo();
        });

        botao_mudar_chat.addEventListener("click", function() {
            
            this.tela_conectar();
        })

        div_container_canal.appendChild(texto_conectado);
        div_container_canal.appendChild(botao_jogar);
        div_container_canal.appendChild(botao_mudar_chat);
    }

    tela_jogo() {

        // todo: criar tela de jogo
    }
}