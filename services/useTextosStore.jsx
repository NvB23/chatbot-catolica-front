import axios from "axios";
import { create } from "zustand";

export const useTextosStore = create((set) => ({
    textos: null,

    exibirTodosOsTextos: async () => {
        try {
            const textos = await axios.get("http://localhost:5000/texto/todos");
            if (textos) {
                set({ textos: textos});
            }
        } catch (erro) {
            console.log(erro)
        }
    },
    
    adicionarTexto: async (nomeArquivo, arquivoPDF) => {
        try {
            const formData = new FormData();

            formData;
            nomeArquivo
            arquivoPDF

            const textos = await axios.get("http://localhost:5000/texto/upload-pdf");
            if (textos) {
                set({ textos: textos});
            }
        } catch (erro) {
            console.log(erro)
        }
    },


}));