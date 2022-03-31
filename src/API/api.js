import axios from "axios";

export const cadastrarUsuario = async (email, nome) => {
    await axios.post("http://localhost:8080/email", {
        email: email,
        nome: nome
    }).then((res) => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    })
}