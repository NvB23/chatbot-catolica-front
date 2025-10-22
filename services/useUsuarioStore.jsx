import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

export const useUsuarioStore = create((set) => ({
    usuario: null,
    carregando: false,
    erro: null,
    inicializado: false,

    login: async (email, senha) => {
        set({ carregando: true, usuario: null, erro: null });
        try {
            const resposta = await axios.post("http://localhost:5000/usuario/entrar", {email: email, senha: senha});
            if (resposta) {
                set({usuario: resposta.data, carregando: true, inicializado: true, erro: null })
            }
        } catch (erro) {
            console.log("Erro" + erro.response.data.mensagem);
            set({erro: erro?.response?.data?.mensagem ?? String(erro), carregando: false, inicializado: true});
        }
    },

    logout: async () => {
        try {
            await axios.post("http://localhost:5000/usuario/sair")
            set({ usuario: null })
        } catch (erro) {
            console.log("Erro" + erro.response.data.mensagem);
            set({erro: erro?.response?.data?.mensagem ?? String(erro)});
        }
    },

    usuarioLogado: async () => {
        try {
            const resposta = await axios.get("http://localhost:5000/usuario/eu")
            set({ usuario: resposta.data , inicializado: true })
        } catch (erro) {
            console.log("Erro" + erro.response.data.mensagem);
            set({erro: erro?.response?.data?.mensagem ?? String(erro), inicializado: true});
        }
    },

    setCarregando: (status) => set({ carregando: status }),


}))