export class Twitch_Connect {
    constructor() {
        this.client = null;
        this.conectado = false;
        return this;
    }

    conectar(channel_name, message_handler, innit_connect) {
        if (this.client !== null) {
            this.desconectar();
        }

        this.client = new tmi.Client({
            channels: [ channel_name ]
        });
        
        this.client.connect().then(() => {
            this.client.on('message', (channel, tags, message) => {

                if (this.conectado == false) {

                    this.conectado = true;
                    message_handler.tela_conectado(channel, innit_connect);
                } 
    
                message_handler.exibir_mensagem(tags['display-name'], message);
            }); 
        }).catch((err) => {

            console.error('Erro ao conectar:', err);
        });
    }

    desconectar() {
        if (!this.conectado) return 1;

        this.client.disconnect();
        this.conectado = false;
    }
}


