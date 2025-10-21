import axios from "axios";

export async function enviarMensagemParaBackend(mensagem) {
    try {
        axios.defaults.withCredentials = true;
        const resposta = await axios.post("http://localhost:5000/chat/envia-mensagem", {mensagem: mensagem});

        return resposta.data?.resposta ?? resposta.data;;
    } catch (erro) {
        console.log(erro);
    }
}