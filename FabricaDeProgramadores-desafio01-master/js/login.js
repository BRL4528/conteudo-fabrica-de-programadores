class Gerenciador {
    constructor() {
        this.usuarios
        this.dados
        this.user = []
    }
    //le dados tela 
    pegarDados() {
        let dados = {}
        dados.nome = document.getElementById("nome").value
        dados.senha = document.getElementById("senha").value

        return dados
    }
    //tela de novo cadastro
    cadastrar() {

        let user = {}
        user.nome = document.getElementById("nome").value
        user.email = document.getElementById("email").value
        user.senha = document.getElementById("senha").value

        this.validar(user)
        this.user.push(user)

        localStorage.setItem("tableUser", JSON.stringify(this.user))
        window.location.replace("index.html");


    }
    //onload
    carregarUsuario() {
        if (localStorage.getItem("tableUser") != null) {
            this.usuarios = JSON.parse(localStorage.getItem("tableUser"))

        } else {
            alert("Necessario Realizar um novo Cadastro!!")
            window.location.replace("./Client.html");
        }

    }
    // verificar usuario certo
    verificarUsuario() {
        let i = 0
        let achou = false
        while (i < this.usuarios.length && !achou) {
            if (this.usuarios[i].nome == this.dados.nome && this.usuarios[i].senha == this.dados.senha) {
                window.location.replace("./Client.html");

                achou = true
            }
            i++
        }
        if (achou != true) {
            alert("Senha Errada!!")
            if (confirm("Deseja realizar um novo cadastro?")) {
                window.location.replace("./cadastro.html");

            }
        }
    }
    //add constructor
    adicionarArray(dados) {
        this.dados = dados
    }
    validar(dados) {

        if (dados.nome != "" && dados.senha != "" && dados.email != "") {
            return true
        }
    }
    enviar() {

        let dados = this.pegarDados()
        if (this.validar(dados)) {
            this.carregarUsuario()
            this.adicionarArray(dados)
            this.verificarUsuario()
        }
        else {
            alert("Preencha os campos!!")
        }
    }
}
let controler = new Gerenciador()