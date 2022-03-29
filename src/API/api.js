import axios from "axios";

export const cadastrarUsuario = (email, nome) => {
    axios.post("https://fsdbfhds", {
        email: email,
        nome: nome
    }).then((res) => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    })
}