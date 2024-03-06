export class Twitch_Connect {
    constructor() {
        return this;
    }

    conectar(channel_name, message_handler) {
        const client = new tmi.Client({
            channels: [ channel_name ]
        });
        
        client.connect();
        
        client.on('message', (channel, tags, message) => {

            // todo: assim que conectar, mudar a tela para iniciar jogo, ou mudar de canal

            console.log(`(${channel}):${tags['display-name']}: ${message}`);

            message_handler.exibirMensagem(tags['display-name'], message);
        });
    }
}


