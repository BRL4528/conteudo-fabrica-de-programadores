class GerenciadorContas {

    constructor() {
        this.idContas = 0
        this.contas = []
        this.IdEdicao = null
        this.empresas = []
    }
    salvar() {

        let conta = this.lerDados()

        if (this.validar(conta)) {
            if (this.IdEdicao == null) {
                this.adicionar(conta)
            } else {
                this.salvarEdicao(conta)
            }

           
        }
        this.gerarTabela()
        this.sincronizarLocalStorage()
        this.excluir()


    }
    //Verificar se o local storage "empresas" é != de vazio. se true, inserir o elemento salvo nesto local, dentro do this.empresas, depois pegar do painel o SElELECT, 
    //criar um "option", e inserir o "id" e "nome", da empresas dentro deste option conforme o for, depois dar um appendChild para entrar dentro do select.
    //e por ultimo insere os valores do local storage dentro dos devidos array, validando é claro.
    atualizarDados() {
        if (localStorage.getItem("empresas") != null) {
            this.empresas = JSON.parse(localStorage.getItem("empresas"))
            let select = document.getElementById("receptor")

            for (let i = 0; i < this.empresas.length; i++) {
                if (this.empresas[i].ativa) {
                    let option = document.createElement("option")
                    option.setAttribute("value", this.empresas[i].id)
                    option.innerText = this.empresas[i].nome
                    select.appendChild(option)
                }
            }
        }
        if (localStorage.getItem("contas") != null) {
            this.contas = JSON.parse(localStorage.getItem("contas"))
        }
        if (localStorage.getItem("idContasSalvas") != null) {
            this.idContas = JSON.parse(localStorage.getItem("idContasSalvas"))
        }
        this.gerarTabela()
    }
    sincronizarLocalStorage() {
        localStorage.setItem("contas",  JSON.stringify(this.contas))
        localStorage.setItem("idContasSalvas", this.idContas)
    }

    lerDados() {
        let conta = {}

        conta.valor = document.getElementById("valor").value
        conta.tipo = document.getElementById("tipo").value
        conta.paga = document.getElementById("paga").checked
        conta.receptor = document.getElementById("receptor").value
        return conta
    }
    adicionar(conta) {

        conta.id = this.idContas
        conta.valor = parseFloat(conta.valor)
        let i = 0
        let achou = false
        while (i < this.empresas.length && !achou) {

            if (this.empresas[i].id == conta.receptor) {
                conta.receptor = this.empresas[i]
                achou = true
            }
            i++
        }

        this.idContas++
        this.contas.push(conta)

    }
    validar(conta) {

        let mensagem = ""
        if (conta.valor == "") {
            mensagem += "preencha o campo Valor!"
        }
        if (conta.tipo == "") {
            mensagem += "preencha o Campo Tipo!!"
        }
        if (conta.receptor == "") {
            mensagem += "preencha o Campo Receptor!!"
        }
        if (mensagem != "") {
            document.getElementById('mensagens').innerHTML = mensagem
        } else {
            return true
        }

    }
    editar() {

    }
    excluir() {


    }

    gerarTabela() {
        let tabela = document.getElementById("tabela-corpo")
        tabela.innerHTML = ""

        for (let i = 0; i < this.contas.length; i++) {
          
            let linha = tabela.insertRow()
            let colunaValor = linha.insertCell()
            let colunaTipo = linha.insertCell()
            let colunaPaga = linha.insertCell()
            let colunaReceptor = linha.insertCell()
            let colunaExcluir = linha.insertCell()
            let colunaEditar = linha.insertCell()

            colunaValor.innerText = this.contas[i].valor
            colunaTipo.innerText = this.contas[i].tipo

            if (this.contas[i].paga == true) {
                colunaPaga.innerText = "Sim"
            } else {
                colunaPaga.innerText = "Não"
            }
            colunaReceptor.innerText = this.contas[i].receptor.nome

            let imgExcluir = document.createElement("img")
            imgExcluir.src = "img/delete.svg"
            imgExcluir.setAttribute("onclick", `contasController.excluir(${this.contas[i].id})`)

            let imgEditar = document.createElement("img")
            imgEditar.src = "img/editar.svg"
            imgEditar.setAttribute("onclick", `contasController.editar(${this.contas[i].id})`)

            colunaExcluir.appendChild(imgExcluir)
            colunaEditar.appendChild(imgEditar)

        }

    }
    salvarEdicao() {

    }





}
let contasController = new GerenciadorContas()