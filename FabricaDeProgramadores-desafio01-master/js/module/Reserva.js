class Reservas {
    constructor() {
        this.cadeiras = []
        this.sessao
        this.local = []
        this.dados = [{
            nome: "",
            filme: "",
            data: "",
            inicio: "",
            dub: "",
            prod: "",
            polt: ""
        }]
        this.user = ""
        this.edit = null
    }
    // Quando necessario gera um novo array com cadeiras desocupadas 
    cadeirasP() {
        this.cadeiras = []
        for (let i = 0; i < 61; i++) {
            if (i > 0 && i < 11) {
                let A = {
                    nome: i, tag: false, id: `A-` + i
                }
                this.cadeiras.push(A)
            }
            if (i > 10 && i < 21) {
                let B = {
                    nome: i, tag: false, id: `B-${i}`
                }
                this.cadeiras.push(B)
            }
            if (i > 20 && i < 31) {

                let C = {
                    nome: i, tag: false, id: `C-${i}`
                }
                this.cadeiras.push(C)
            }
            if (i > 30 && i < 41) {
                let D = {
                    nome: i, tag: false, id: `D-${i}`
                }
                this.cadeiras.push(D)
            }
            if (i > 40 && i < 51) {
                let E = {
                    nome: i, tag: false, id: `E-${i}`
                }
                this.cadeiras.push(E)
            }
            if (i > 50 && i < 61) {
                let F = {
                    nome: i, tag: false, id: `F-${i}`
                }
                this.cadeiras.push(F)
            }
        }
        this.gerarCadeiras()
    }
    // Gera a sala com as cadeiras, analisando se está ocupada ou não, se estiver ocupada, trata para impressão em tela
    gerarCadeiras() {
        let sala = document.getElementById("sala1")
        sala.innerHTML = ""
        let y = 1
        for (let i = 0; i < 61; i++) {

            let fileira = document.createElement("ul")
            sala.appendChild(fileira)

            if (y < 11) {
                let cadeira1 = document.createElement("li")
                cadeira1.setAttribute("class", "card")
                cadeira1.setAttribute("onclick", `controller.mudarEstado('A-${y}')`)
                cadeira1.innerText = "A-" + y
                if (this.cadeiras[i].tag == true) {
                    cadeira1.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira1.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira1)
            }
            if (y > 10 && y < 21) {

                let cadeira2 = document.createElement("li")
                cadeira2.setAttribute("class", "card")
                cadeira2.setAttribute("onclick", `controller.mudarEstado('B-${y}')`)

                cadeira2.innerText = "B-" + y

                if (this.cadeiras[i].tag == true) {
                    cadeira2.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira2.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira2)

            }
            if (y > 20 && y < 31) {
                let cadeira3 = document.createElement("li")
                cadeira3.setAttribute("class", "card")
                cadeira3.setAttribute("onclick", `controller.mudarEstado('C-${y}')`)

                cadeira3.innerText = "C-" + y

                if (this.cadeiras[i].tag == true) {
                    cadeira3.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira3.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira3)

            }
            if (y > 30 && y < 41) {
                let cadeira4 = document.createElement("li")
                cadeira4.setAttribute("class", "card")
                cadeira4.setAttribute("onclick", `controller.mudarEstado('D-${y}')`)

                cadeira4.innerText = "D-" + y

                if (this.cadeiras[i].tag == true) {
                    cadeira4.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira4.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira4)

            }
            if (y > 40 && y < 51) {
                let cadeira5 = document.createElement("li")
                cadeira5.setAttribute("class", "card")
                cadeira5.setAttribute("onclick", `controller.mudarEstado('E-${y}')`)

                cadeira5.innerText = "E-" + y

                if (this.cadeiras[i].tag == true) {
                    cadeira5.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira5.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira5)

            }
            if (y > 50 && y < 61) {
                let cadeira7 = document.createElement("li")
                cadeira7.setAttribute("class", "card")
                cadeira7.setAttribute("onclick", `controller.mudarEstado('F-${y}')`)

                cadeira7.innerText = "F-" + y

                if (this.cadeiras[i].tag == true) {
                    cadeira7.setAttribute("style", "background-color: red;")

                } if (this.cadeiras[i].tag == false) {
                    cadeira7.setAttribute("style", "background-color: green;")
                }
                fileira.appendChild(cadeira7)
            }
            y++
        }

    }
    // Gera tabela com a nova resarva realizada
    gerarTabela() {

        let limp = document.querySelector("#table-body")
        limp.innerHTML = ""
        let tabela = document.createElement("tbody")
        for (let i = 0; i < this.dados.length; i++) {
            let linha = tabela.insertRow()
            limp.appendChild(tabela)

            let colunaFilme = linha.insertCell()
            let colunaData = linha.insertCell()
            let colunaTime = linha.insertCell()
            let colunaDubl = linha.insertCell()
            let colunaProd = linha.insertCell()
            let colunaNome = linha.insertCell()
            let colunaPolt = linha.insertCell()


            let colunaEditar = linha.insertCell()
            let colunaExcluir = linha.insertCell()

            colunaFilme.innerText = this.dados[i].filme
            colunaData.innerText = this.dados[i].data
            colunaTime.innerText = this.dados[i].inicio
            colunaDubl.innerText = this.dados[i].dub
            colunaProd.innerText = this.dados[i].prod
            colunaNome.innerText = this.dados[i].nome
            colunaPolt.innerText = this.user

            let imgEditar = document.createElement("img")
            imgEditar.src = "./img/edit.svg"
            imgEditar.setAttribute("id", `${this.sessao[i].id}`)
            imgEditar.setAttribute("name", `edit-reserva`)
            colunaEditar.appendChild(imgEditar)

            let imgExcluir = document.createElement("img")
            imgExcluir.setAttribute("id", `${this.sessao[i].id}`)
            imgExcluir.setAttribute("name", `delet-reserva`)
            imgExcluir.src = "./img/delete.svg"
            colunaExcluir.appendChild(imgExcluir)

        }

    }
    // Quando usario click na cadeira, muda estado, mudando de desocupada para ocupada, ou contrario.
    mudarEstado(id) {
        let sala = document.getElementById("sala1")
        sala.innerHTML = ""
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i].id == id) {
                if (this.cadeiras[i].tag == false) {
                    this.cadeiras[i].tag = true
                } else {
                    this.cadeiras[i].tag = false
                }
            }
        }
        this.addLocalStorage()
        this.gerarCadeiras()
    }
    // Adiciona sala completa e valores da tabela no localstorage
    addLocalStorage() {
        localStorage.setItem("tableReserva", JSON.stringify(this.cadeiras))
        localStorage.setItem("tableReservaProntas", JSON.stringify(this.local))
    }
    // Carrega todos os dados necessarios, analisando condições pré determinada, da tela (tabela).
    getLocalStorage() {
        if (localStorage.getItem("tableReserva") != null) {
            this.cadeiras = JSON.parse(localStorage.getItem("tableReserva"))
            this.gerarCadeiras()
        } else {
            this.cadeirasP()
        }

        if (localStorage.getItem("tableSessao") != null) {
            this.sessao = JSON.parse(localStorage.getItem("tableSessao"))
            let select = document.getElementById('receptorReservation')

            for (let i = 0; i < this.sessao.length; i++)
                if (this.sessao[i]) {
                    let op = document.createElement('option')
                    op.setAttribute('value', this.sessao[i].id)
                    let valor
                    valor = this.sessao[i].filme + ", " + this.sessao[i].sala + ", " + this.sessao[i].data + ", " + this.sessao[i].dublagem + ", " + this.sessao[i].producao + ", " + this.sessao[i].data
                    op.innerText = valor
                    select.appendChild(op)
                }
        } if (localStorage.getItem("tableClient") != null) {
            this.client = JSON.parse(localStorage.getItem("tableClient"))
            let select1 = document.getElementById('receptorClient')

            for (let i = 0; i < this.client.length; i++)
                if (this.client[i]) {
                    let op = document.createElement('option')
                    op.setAttribute('value', this.client[i].nome)

                    op.innerText = this.client[i].nome
                    select1.appendChild(op)
                }
        }
    }
    // leitura de dados em tela, identifica a cadeira selecionada.
    lerDados() {
        const id = parseInt(document.getElementById("receptorReservation").value)
        for (let y = 0; y < this.cadeiras.length; y++) {
            if (this.cadeiras[y].tag == true) {
                let cadeiras = this.cadeiras[y].id
                this.user += cadeiras
            }
        }
        for (let i = 0; i < this.sessao.length; i++) {
            if (this.sessao[i].id == id) {
                this.dados = [{
                    nome: document.getElementById("receptorClient").value,
                    filme: this.sessao[i].filme,
                    data: this.sessao[i].data,
                    inicio: this.sessao[i].tempo,
                    dub: this.sessao[i].dublagem,
                    prod: this.sessao[i].producao,
                    polt: this.user
                }]
            }
        }
    }
    // Adiciona dodos locais no this
    adicionarSes() {
        let lex = this.dados
        this.local.push(lex)
        return lex
    }
    // Adiciona o filme identificado.
    adicionaUser() {
        let user = this.user
        return user
    }
    // Validação de todos os dados da tela.
    validar(dados, user) {
        if (this.edit == null) {
            let error = "";
            if (dados.filme == "") {
                error += "Campo Filme é obrigatório!\n";
            }
            if (dados.nome == "") {
                error += "Campo Cliente obrigatório!\n";
            }
            if (user == "") {
                error += "Escolha uma poltrona!\n";
            }
            if (error != "") {
                document.getElementById("textoMensagem").innerText = error;
                document.getElementById("mensagem").classList.add("show");
            } else {
                return true
            }
            return false
        }
    }
    // Manipula mensagem em tela.
    mensagem() {
        let msg = document.getElementById("textoMensagem").innerText
        if (msg != "") {
            document.getElementById("mensagem").classList.remove("show")
        } else {
            document.getElementById("msgSecess").classList.remove("show")
        }
        document.getElementById("textoMensagem").innerText = ""
    }
    // Recebe rotina de usuario e toma destinação correta.
    toSave() {
        this.lerDados()
        const lex = this.adicionarSes()
        const user = this.adicionaUser()
        if (this.edit != null) {
            this.saveEdit()
        } else {
            if (this.validar(lex, user)) {
                this.addLocalStorage()
                this.gerarTabela()
                this.getLocalStorage()
            }
        }
    }
    //Envia mensagem de sucesso nas operações.
    msgSucefull() {
        return "Cadastro realizado com sucesso!!"
    }
}
let controller = new Reservas()
