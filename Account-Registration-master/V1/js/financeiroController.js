//Planejamento...
//para puxar uma nova pagina precisa ser feito uma maneira para compartilhar escopo, atravez do local storage, as empresas deveram 
//constar no local storage, juntamente com o IdEmpresas e IdContas da empresa, para não conflitar id já cadastrados.
//Sequencia de Execução = Evento click --> this.salvar --> this.lerDados --> this.validar --> this.adicionar --> (se edit)this.salvarEdicao --> 
//this.limpar --> this.sincronizarlocalStorage --> this.gerarTabela.

class GerenciadorFinanceiro {

    constructor() {
        this.edicao = null
        this.gerarId = 1
        this.lista = []
    }

    //Atualiza todos os dados, verificamdo se exite algo no local storage, se existir, pegar valores e inserir no objeto e gera a tabela, e 
    //atualiza o id das empresas

    atualizar() {
        if (localStorage.getItem("empresas") != null) {
            this.lista = JSON.parse(localStorage.getItem('empresas'))
        }

        if (localStorage.getItem("geradorIdEmpresas") != null) {
            this.gerarId = JSON.parse(localStorage.getItem('geradorIdEmpresas'))
        }
        this.gerarTabela()

    }

    //Criar ojeto vazio, ler as informações da tela, e atribuir os dados de acordo com sua categoria, e retornar o objeto com os valores, 
    //e altera o status da emprea para ativa ou inativa

    lerDados() {

        let empresa = {}
        empresa.nome = document.getElementById('inputNome').value
        empresa.endereco = document.getElementById('inputEndereco').value
        empresa.cnpj = document.querySelector('#inputCnpj').value
        empresa.razao = document.querySelector('#inputRazao').value
        empresa.ativa = true

        return empresa

    }

    // Start todo o processo do sofware, lendo os dados, validando, verificando se for edição ou um novo cadastro, gera a tabela com os valor 
    // já adicionados e novos dados, 

    salvar() {
        let empresa = this.lerDados()
        if (this.validar(empresa)) {
            if (this.edicao == null) {
                this.adicionar(empresa)
            } else {
                this.salvarEdicao(empresa)
            }
            this.limpar()
            this.sincronizarLocalStorage()
            this.gerarTabela()

        }
    }

    //recebe a emprea valida todos os dados do módulo "Empresas", verificando se todos os inputs estão inseridos corretamente. Deve tamebm 
    // inserir a mensagem na div Mensagens.

    validar(empresa) {
        if (empresa.nome == '' || empresa.endereco == '' || empresa.cnpj == '' || empresa.razao == '') {
            alert('Todos os dados são obrigatório!')
            return false
        }
        return true
    }

    //Adiciona o objeto empresa no array,adiciona id, soma mais um no gerador de id, limpa os campos no modulo, sincroniza os dados no 
    // local storage, e gera a tabela, para reconstruir a mesma, e atuliza o ID que está no local storage.

    adicionar(empresa) {

        empresa.id = this.gerarId
        this.gerarId++
        this.lista.push(empresa)


    }

    //Atualiza os dados no local storage, inserindo-o do type string no local storage

    sincronizarLocalStorage() {

        localStorage.setItem('empresas', JSON.stringify(this.lista))
        localStorage.setItem('geradorIdEmpresas', JSON.stringify(this.gerarId))
    }

    //Gera a tabela (Lista de empresas cadastradas), inserindo imgs repectivas a editar e cuidando a fleg de ativa ou inativa

    gerarTabela() {

        let tab = document.querySelector('#tabela')
        tab.innerHTML = ''


        for (let i = 0; i < this.lista.length; i++) {
            let linha = tab.insertRow()
            let cellAtiva = linha.insertCell()
            let cellExcluir = linha.insertCell()
            let cellEditar = linha.insertCell()
            let cellNome = linha.insertCell()
            let cellEndereco = linha.insertCell()
            let cellCnpj = linha.insertCell()
            let cellRazao = linha.insertCell()



            let imgExcluir = document.createElement('img')
            let imgEditar = document.createElement('img')
            let imgAtiva = document.createElement('img')
            imgExcluir.src = 'img/delete.svg'
            imgExcluir.setAttribute('onclick', `gerenciador.excluir(${this.lista[i].id})`)
            imgEditar.src = 'img/editar.svg'
            imgEditar.setAttribute('onclick', `gerenciador.editar(${this.lista[i].id})`)
            imgAtiva.src = 'img/confirm.svg'
            imgAtiva.setAttribute('onclick', `gerenciador.alterarStatus(${this.lista[i].id})`)

            cellNome.innerText = this.lista[i].nome
            cellEndereco.innerText = this.lista[i].endereco
            cellCnpj.innerText = this.lista[i].cnpj
            cellRazao.innerText = this.lista[i].razao
            cellExcluir.appendChild(imgExcluir)
            cellEditar.appendChild(imgEditar)
            cellAtiva.appendChild(imgAtiva)

           

            //Logica para analisar se a empresa está ativa ou inativa
            if (this.lista[i].ativa) {
                imgAtiva.src = "img/confirm.svg"
            } else {
                imgAtiva.src = "img/disabled.svg"
            }

            localStorage.setItem("empresas", JSON.stringify(this.lista))
        }
    }

    //Substitui o elemento do array de objeto pelo novos itens inserifos pelo usuario
    editar(id) {

        let i = 0
        let achou = false


        while (i < this.lista.length && !achou) {
            if (this.lista[i].id == id) {
                document.getElementById('inputNome').value = this.lista[i].nome
                document.getElementById('inputEndereco').value = this.lista[i].endereco
                document.querySelector('#inputCnpj').value = this.lista[i].cnpj
                document.querySelector('#inputRazao').value = this.lista[i].razao
                this.edicao = id
                achou = true
            }
            i++
        }



    }

    salvarEdicao(empresa) {

        let i = 0
        let achou = false

        while (i < this.lista.length && !achou) {
            if (this.lista[i].id == this.edicao) {
                this.lista[i].nome = empresa.nome
                this.lista[i].endereco = empresa.endereco
                this.lista[i].cnpj = empresa.cnpj
                this.lista[i].razao = empresa.razao
                achou = true
            }
            i++
        }
        this.gerarTabela()
    }

    excluir(id) {
        let i = 0
        let procurar = false
        while (i < this.lista.length && !procurar) {
            if (this.lista[i].id == id) {
                procurar = true
                this.lista.splice(i, 1)
            } else {
                i++
            }
        }
        this.gerarTabela()
    }

    // Este metodo realiza a limpeza de todos os inputs do modulo "Empresas", e zera a fleg edição para retornar o valor em seu estado anterior.
    limpar() {
        document.getElementById('inputNome').value = ''
        document.getElementById('inputEndereco').value = ''
        document.querySelector('#inputCnpj').value = ''
        document.querySelector('#inputRazao').value = ''
        this.edicao = null
    }

    //Responsavel para mudar a fleg de ativa ou inativa
    alterarStatus(id) {
        if (confirm("tem certeza?")) {

            let i = 0
            let achou = false

            while (i < this.lista.length && !achou) {
                if (this.lista[i].id == id) {
                    this.lista[i].ativa = !this.lista[i].ativa
                    achou = true
                }
                i++
            }

            this.gerarTabela()
        }
    }


}

let gerenciador = new GerenciadorFinanceiro()