class ContasController {
    constructor() {
        this.idEdicao = null
        this.contas = []
        this.empresas = []
        this.geradorId = 1
    }
    fecharMenu() {
        document.getElementById("menu").classList.add("fechar-menu");
        document.getElementById("main").classList.remove("aumentar-main");
        document.getElementById("btn-menu").classList.add("btn-menu-abrir-exibir");
    }
    abrirMenu() {
        document.getElementById("menu").classList.remove("fechar-menu");
        document.getElementById("main").classList.add("aumentar-main");
        document.getElementById("btn-menu").classList.remove("btn-menu-abrir-exibir");
        document.getElementById("menu").classList.add("exibir-menu");
    }
    fecharMensagem() {
        document.getElementById("mensagens").classList.remove("show")
    }

    //No momento em que abrir a pagina, todos os elementos salvos no local storage e carregado para o select.
    atualizarEstado() {
        if (localStorage.getItem('empresas') != null) {
            this.empresas = JSON.parse(localStorage.getItem('empresas'))
            let select = document.getElementById('receptor')

            for (let i = 0; i < this.empresas.length; i++) {
                if (this.empresas[i].ativa) {
                    let op = document.createElement('option')
                    op.setAttribute('value', this.empresas[i].id)
                    op.innerText = this.empresas[i].nome
                    select.appendChild(op)
                }

            }
        }
        if (localStorage.getItem('contas') != null) {
            this.contas = JSON.parse(localStorage.getItem('contas'))
        }
        if (localStorage.getItem('geradorId') != null) {
            this.geradorId = JSON.parse(localStorage.getItem('geradorIdContas'))
        }
        this.gerarTabela()
    }
    validar(contas) {
        if (contas.valor == '' || contas.tipo == '' || contas.receptor == '') {
            alert('Todos os dados são obrigatório!')
            return false
        }
        return true

    }
    sicronizar() {
        localStorage.setItem('contas', JSON.stringify(this.contas))
        localStorage.setItem('geradorIdContas', this.geradorId)
    }

    salvar() {
        let conta = this.lerDados()

        if (this.validar(conta)) {
            if (this.idEdicao == null) {
                this.adicionar(conta)
            } else {
                this.salvarEdicao(conta)
            }
        }
        this.limpar()
        this.gerarTabela()
        this.sicronizar()

    }

    lerDados() {
        let conta = {}
        conta.valor = document.getElementById('valor').value
        conta.tipo = document.getElementById('tipo').value
        conta.paga = document.getElementById('paga').checked
        conta.receptor = document.getElementById('receptor').value

        return conta
    }

    adicionar(conta) {
        conta.id = this.geradorId
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

        this.contas.push(conta)
        this.geradorId++

    }

    gerarTabela() {

        let tabela = document.getElementById('tabela-corpo')
        tabela.innerHTML = ""

        for (let i = 0; i < this.contas.length; i++) {
            let linha = tabela.insertRow()

            let colunaValor = linha.insertCell()
            let colunaTipo = linha.insertCell()
            let colunaPaga = linha.insertCell()
            let colunaReceptor = linha.insertCell()
            let conlunaExcluir = linha.insertCell()
            let colunaEditar = linha.insertCell()
            let linhaDivisoria = tabela.insertRow()

            let divDivisoria = document.createElement("div")
            divDivisoria.id = "divDivisoria"
            linhaDivisoria.appendChild(divDivisoria)
           
            colunaValor.innerText = this.contas[i].valor
            colunaTipo.innerText = this.contas[i].tipo

            if (this.contas[i].paga == true) {
                colunaPaga.innerText = "sim"
            } else {
                colunaPaga.innerText = "Não"
            }
            colunaReceptor.innerText = this.contas[i].receptor.nome

            let imgExluir = document.createElement("img")
            imgExluir.src = "img/delete.svg"
            imgExluir.setAttribute("onclick", `contasController.excluir('${this.contas[i].id}')`)
            conlunaExcluir.appendChild(imgExluir)

            let imgEditar = document.createElement("img")
            imgEditar.src = "img/editar.svg"
            imgEditar.setAttribute("onclick", `contasController.editar('${this.contas[i].id}')`)
            colunaEditar.appendChild(imgEditar)

          
        }

    }

    editar(id) {
        let i = 0
        let pronto = false

        while (i < this.contas.length && !pronto) {

            if (this.contas[i].id == id) {
                this.contas[i].valor = document.getElementById("valor").value = this.contas[i].valor
                this.contas[i].tipo = document.getElementById("tipo").value = this.contas[i].tipo
                this.contas[i].paga = document.getElementById("paga").checked = this.contas[i].paga
              
                let y = 0
                let achou = false
                while (i < this.empresas.length && !achou) {
        
                    if (this.empresas[y].id == id) {
                        this.contas.receptor = this.empresas[y]
                        document.getElementById("receptor").value = 
                        achou = true
                    }
                    y++
                }
                this.idEdicao = id
            }
            i++

        }
    }

    salvarEdicao(conta) {

        let i = 0
        let pronto = false

        while (i < this.contas.length && !pronto) {
            if (this.contas[i].id == this.idEdicao) {
                this.contas[i].valor = conta.valor
                this.contas[i].tipo = conta.tipo
                this.contas[i].paga = conta.paga
                this.contas[i].receptor = this.empresas[i]
                pronto = true
            }
          i++
        }
        this.gerarTabela()

    

    }

    excluir(id) {
        let i = 0
        let procurar = false
        while (i < this.contas.length && !procurar) {
            if (this.contas[i].id == id) {
                procurar = true
                this.contas.splice(i, 1)
            } else {
                i++
            }

        }
        this.sicronizar()
        this.gerarTabela()
    }

    limpar() {
        document.getElementById('valor').value = ""
        document.getElementById('tipo').value = ""
        document.getElementById('paga').checked = ""
        document.getElementById('receptor').value = ""

        this.idEdicao = null
    }
}

let contasController = new ContasController()