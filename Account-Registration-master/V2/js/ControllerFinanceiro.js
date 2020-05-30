//Planejamento...
//Neste módulo, será utilizado como "DB" o local storage do browser, onde será armazenado a empresa cadastrada, o IdEmpresas e IdContas.
//onde o mesmo deve ser atualizado após cada novo cadastro, evitando conflitos de ID.
//Sequência de Execução ->this.atualiar() --> evento click -> iniciar na função "this.salvar(){", recebe um objeto com os dados inseridos pelo usuario, usando 
//a função "this.lerDados()", e executa o "this.validar()", validando assim os dados inseridos no objeto se true -> adicionar este objeto em 
//um array, atravez da função "this.adicionar()", mas se false, finalizar enviando uma mensagem dizendo para inserir os dados corretos,
//verificar se for edição, se sim usar a função "this.salvarEdicao()" onde a mesma vai usar o ID para salvar no mesmo elemento do objeto
//de array, evitando assim a inserção de um novo item no objeto. logo em seguida executar a função "this.limpar()", limpando assim os inputs,
//para atualizar os dados no local storage, deve executar a função "this.sincronizarDados", e por ultimo "this.gerarTabela }", lembrando que 
//está função deve ter a lógica para gerar a flag correta indicando se a empresa esta ativa ou, inativa. criar uma função para mudar a flag 
//de ativa ou inativa.

class ControllerFinacas {

    constructor() {
        this.idEmpresas = 0
        this.empresas = []
        this.idEdicao = null

    }

    //Se houver algum dados no local storage, esse elemento atualiza colocando nos arrays e gerando a tabela
    atualizar() {
        if (localStorage.getItem("empresas") != null) {
            this.empresas = JSON.parse(localStorage.getItem("empresas"))
        }
        if (localStorage.getItem("idEmpresasTemp") != null) {
            this.idEmpresas = JSON.parse(localStorage.getItem("idEmpresasTemp"))
        }
        this.gerarTabela()


    }

    //Função recebe o evento click e gerencia a execução do mesmo.
    salvar() {

        let empresa = this.lerDados()
        if (this.validar(empresa)) {
            if (this.idEdicao == null) {
                this.adicionar(empresa)
            } else {
                this.salvarEdicao(empresa)
            }
            this.limpar()
            this.sincronizarDados()
            this.gerarTabela()
        }
    }

    //Insere os valores dos campos da tela em um objeto e retorna o objeto com os valores inseridos corretamente.
    lerDados() {
        let empresas = {}
        empresas.nome = document.getElementById("inputNome").value
        empresas.endereco = document.getElementById("inputEndereco").value
        empresas.cnpj = document.getElementById("inputCnpj").value
        empresas.razao = document.getElementById("inputRazao").value
        empresas.ativa = true

        return empresas
    }

    //valida todos os dados inseridos no objeto.
    validar(empresa) {
        let mensagem = ''
        if (empresa.nome == "") {
            mensagem += "Preencha corretamente o Campo nome!"
        }
        if (empresa.endereco == "") {
            mensagem += "Preencha corretamente o campo Endereço!"
        }
        if (empresa.cnpj == "") {
            mensagem += "preencha corretamente o campo CNPJ!"
        }
        if (empresa.razao == "") {
            mensagem += "Preencha corretamente o campo Razão Social!!"
        }
        if (mensagem != "") {
            document.getElementById("mensagens").innerText = mensagem
        } else {
            return true
        }


    }

    //inserir os valores do objeto em uma array .
    adicionar(empresa) {
        empresa.id = this.idEmpresas
        this.idEmpresas++
        this.empresas.push(empresa)



    }

    //salvar o o item selecionado pelo usuario no mesmo item no objeto, atualizando assim um item selecionado pelo usuario.
    salvarEdicao(empresa) {
        let i = 0
        let achou = false

        while (i < this.empresas.length && !achou) {

            if (this.empresas[i].id == this.idEdicao) {
                this.empresas[i].nome = empresa.nome
                this.empresas[i].endereco = empresa.endereco
                this.empresas[i].cnpj = empresa.cnpj
                this.empresas[i].razao = empresa.razao
            }
            i++
        }
        this.gerarTabela()

    }

    //limpar todos os campos da tela.
    limpar() {
        document.getElementById("inputNome").value = ""
        document.getElementById("inputEndereco").value = ""
        document.getElementById("inputCnpj").value = ""
        document.getElementById("inputRazao").value = ""
        this.idEdicao = null
    }

    //pega os input e insere os valores que estão no aray de objets
    editar(id) {
        let i = 0
        let achou = false
        while (i < this.empresas.length && !achou) {
            if (this.empresas[i].id == id) {
                document.getElementById("inputNome").value = this.empresas[i].nome
                document.getElementById("inputEndereco").value = this.empresas[i].endereco
                document.getElementById("inputCnpj").value = this.empresas[i].cnpj
                document.getElementById("inputRazao").value = this.empresas[i].razao
                this.idEdicao = id
                achou = true
            }
            i++

        }


    }

    //sincroniza todos os dados no local storage, o array e ID
    sincronizarDados() {
        localStorage.setItem("empresas", JSON.stringify(this.empresas))
        localStorage.setItem("idEmpresasTemp", JSON.stringify(this.idEmpresas))
    }

    //Gera a tabela com todos os dados armazenados no local storage, cuidano a fleg de ativa/inativa, e gera as imagens de edição e exclusão.
    gerarTabela() {
        let tabela = document.getElementById("tabela")
        tabela.innerHTML = ""

        for (let i = 0; i < this.empresas.length; i++) {
            let linha = tabela.insertRow()
            let colunaFleg = linha.insertCell()
            let colunaNome = linha.insertCell()
            let colunaEndereco = linha.insertCell()
            let colunaCnpj = linha.insertCell()
            let colunaRazao = linha.insertCell()
            let colunaExcluir = linha.insertCell()
            let colunaEditar = linha.insertCell()

            colunaNome.innerText = this.empresas[i].nome
            colunaEndereco.innerText = this.empresas[i].endereco
            colunaCnpj.innerText = this.empresas[i].cnpj
            colunaRazao.innerText = this.empresas[i].razao

            let imgExcluir = document.createElement("img")
            imgExcluir.src = "img/delete.svg"
            imgExcluir.setAttribute("onclick", `gerenciadorFinacas .excluir("${this.empresas[i].id}")`)
            colunaExcluir.appendChild(imgExcluir)

            let imgEditar = document.createElement("img")
            imgEditar.src = "img/editar.svg"
            imgEditar.setAttribute("onclick", `gerenciadorFinacas.editar("${this.empresas[i].id}")`)
            colunaEditar.appendChild(imgEditar)

            let imgAtiva = document.createElement("img")
            imgAtiva.src = "img/confirm.svg"
            imgAtiva.setAttribute("onclick", `gerenciadorFinacas.situacaoEmpresa("${this.empresas[i].id}")`)
            colunaFleg.appendChild(imgAtiva)

            if (this.empresas[i].ativa) {
                imgAtiva.src = "img/confirm.svg"
            } else {
                imgAtiva.src = "img/disabled.svg"
            }
            localStorage.setItem("empresas", JSON.stringify(this.empresas))


        }

    }

    //muda a fleg para ativa ou inativa, alterando imgs para o usuario e setando a fleg no array.
    situacaoEmpresa(id) {
        if (confirm("tem Certeza??")) {


            let i = 0
            let achou = false
            while (i < this.empresas.length && !achou) {
                if (this.empresas[i].id == id) {
                    this.empresas[i].ativa = !this.empresas[i].ativa
                    achou = true
                }
                i++
            }
            this.gerarTabela()
        }
    }

}
let gerenciadorFinacas = new ControllerFinacas()