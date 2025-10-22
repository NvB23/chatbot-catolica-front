import axios from "axios";
import { create } from "zustand";

export const useTextosStore = create((set) => ({
    textos: null,

    exibirTodosOsTextos: async () => {
        try {
            const textos = await axios.get("http://localhost:5000/texto/todos");
            if (textos) {
                set({ textos: textos});
                console.log(textos);
            }
        } catch (erro) {
            console.log(erro)
        }
    },
    
    adicionarTexto: async (nomeArquivo, arquivoPDF) => {
        try {
            const formData = new FormData();
            formData.append("nome_documento", nomeArquivo);
            formData.append("arquivo_pdf", arquivoPDF);
    
            const textos = await axios.post("http://localhost:5000/texto/upload-pdf", formData,{
                headers: {
                    'Content-Type' : 'multipart/form-data' 
                }
            });
            if (textos) {
                set({ textos: textos});
                console.log("textos enviados!")
            }
        } catch (erro) {
            console.log(erro)
        }
    },

    deletarTextos: async (idUsuarioParaDeletar) => {
        try {
            await axios.delete(`http://localhost:5000/texto/deletar/${idUsuarioParaDeletar}`);
            console.log("texto deletado")
        }catch (erro) {
            console.log(erro)
        }
    }


}));