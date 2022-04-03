import axios from "axios";

export const cadastrarUsuario = async (email, nome) => {
    await axios.post("https://formula1store.herokuapp.com", {
        email: email,
        nome: nome
    });
}