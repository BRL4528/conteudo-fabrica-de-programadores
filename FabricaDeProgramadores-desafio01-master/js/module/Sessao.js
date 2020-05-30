
export default class RegisterSessao {
    constructor() {
        this.sessao = []
        this.dados = {}
        this.filme = []
        this.sala = []
        this.id = 1
        this.edit = null
    }
    //Adiciona a Sessao no this.sessao
    addLocalStorage(dados) {
        this.id++
        dados.id = this.id
        this.sessao.push(dados);
    }
    //Lê todos os dados dos inputs
    lerDados() {
        this.dados = {
            filme: document.querySelector("#receptorMovie").value,
            sala: document.querySelector("#receptorRoom").value,
            dublagem: document.querySelector("#dubbing").value,
            producao: document.querySelector("#production").value,
            data: document.querySelector("#dateMovie").value,
            tempo: document.querySelector("#timeMovie").value,
            config: document.querySelector("#temp").innerText,
            id: document.querySelector("#temp1").innerText
        }
    }
    // Verifica se existe erro nos dados inseridos
    errorMsg() {
        if (this.edit == null) {
            this.dataUpdate()
            let error = "";

            if (this.dados.filme == "") {
                error += "Campo Filme é obrigatório!\n";
            }

            if (this.dados.sala == "") {
                error += "Campo Sala é obrigatório!\n";
            }

            if (this.dados.dublagem == "") {
                error += "Campo Dublado/Legenddo obrigatório!\n";
            }
            if (this.dados.producao == "") {
                error += "Campo 3D/2D obrigatório!\n";
            }
            if (this.dados.data == "") {
                error += "Campo Data obrigatório!\n";
            }
            if (this.dados.tempo == "") {
                error += "Campo Tempo obrigatório!\n";
            }
            return error;
        }
    }
    //Carrega dados LocalStorage
    dataUpdate() {
        this.limpar()
        if (localStorage.getItem("tableFilmes") && localStorage.getItem("tableSala")) {
            this.filme = JSON.parse(localStorage.getItem("tableFilmes"))
            this.sala = JSON.parse(localStorage.getItem("tableSala"))

            let select = document.getElementById('receptorMovie')
            for (let i = 0; i < this.filme.length; i++)
                if (this.filme[i]) {
                    let op = document.createElement('option')
                    op.setAttribute('value', this.filme[i].nome)
                    op.innerText = this.filme[i].nome
                    select.appendChild(op)
                }

        let select2 = document.getElementById('receptorRoom')
        for (let y = 0; y < this.sala.length; y++)
            if (this.sala[y]) {
                let op = document.createElement('option')
                op.setAttribute('value', this.sala[y].sala)
                op.innerText = this.sala[y].sala
                select2.appendChild(op)
            }
        }
        if( localStorage.getItem("tableSessao") != null){
            this.sessao = JSON.parse(localStorage.getItem("tableSessao"))
        }
        if( localStorage.getItem("IDtableSessao") != null){
            this.id = JSON.parse(localStorage.getItem("IDtableSessao"))
        }
        this.gerarTabela()
    }
    //Insere os dados no localStorage 
    localStorageUpdate() {
        localStorage.setItem("IDtableSessao", JSON.stringify(this.id))
        localStorage.setItem("tableSessao", JSON.stringify(this.sessao))
    }
    //Gera tabela com informações de Sessoes e imagesn delet/edit
    gerarTabela() {
        let tabela = document.createElement("tbody")
        for (let i = 0; i < this.sessao.length; i++) {
            let linha = tabela.insertRow()
            let colunaFilme = linha.insertCell()
            let colunaData = linha.insertCell()
            let colunaTime = linha.insertCell()
            let colunaDubl = linha.insertCell()
            let colunaSala = linha.insertCell()
            let colunaProd = linha.insertCell()
            let colunaEditar = linha.insertCell()
            let colunaExcluir = linha.insertCell()

            colunaFilme.innerText = this.sessao[i].filme
            colunaData.innerText = this.sessao[i].data 
            colunaTime.innerText = this.sessao[i].tempo 
            colunaDubl.innerText = this.sessao[i].dublagem
            colunaSala.innerText = this.sessao[i].sala
            colunaProd.innerText = this.sessao[i].producao
            
            let imgEditar = document.createElement("img")
            imgEditar.src = "./img/edit.svg"
            imgEditar.setAttribute("id", `${this.sessao[i].id}`)
            imgEditar.setAttribute("name", `edit-sessao`)
            colunaEditar.appendChild(imgEditar)

            let imgExcluir = document.createElement("img")
            imgExcluir.setAttribute("id", `${this.sessao[i].id}`)
            imgExcluir.setAttribute("name", `delet-sessao`)
            imgExcluir.src = "./img/delete.svg"
            colunaExcluir.appendChild(imgExcluir)
        }
        return tabela
    }
    //Limpa os inputs da tela
    limpar() {
        document.querySelector("#receptorMovie").innerHTML = "<option value=''>Select...</option>"
        document.querySelector("#receptorRoom").innerHTML = "<option value=''>Select...</option>"
        document.querySelector("#dubbing").value = ""
        document.querySelector("#production").value = ""
        document.querySelector("#dateMovie").value = ""
        document.querySelector("#timeMovie").value = ""
        document.querySelector("#temp1").innerText = ""
        document.querySelector("#temp").innerText = ""
    }
    //Prepara Sessao para ser editada
    editar(id) {
        this.dataUpdate()
        let i = 0
        let pronto = false

        while (i < this.sessao.length && !pronto) {
            if (this.sessao[i].id == id) {
                document.querySelector("#receptorMovie").value = this.sessao[i].filme
                document.querySelector("#receptorRoom").value = this.sessao[i].sala
                document.querySelector("#dubbing").value = this.sessao[i].dublagem
                document.querySelector("#production").value = this.sessao[i].producao
                document.querySelector("#dateMovie").value = this.sessao[i].data
                document.querySelector("#timeMovie").value = this.sessao[i].tempo
                document.querySelector("#temp").innerHTML = "Modo Edição do Item - "
                document.querySelector("#temp1").innerHTML = this.sessao[i].id

                this.sessao[i].config = true
                pronto = true
            }
            i++
        }
        this.localStorageUpdate()
    }
    //Salva Sessao editada
    saveEdit(dados) {
        let i = 0
        let pronto = false
        while (i < this.sessao.length && !pronto) {
            if (this.sessao[i].id == dados.id) {
                this.sessao[i].filme = dados.filme
                this.sessao[i].sala = dados.sala
                this.sessao[i].dublagem = dados.dublagem
                this.sessao[i].producao = dados.producao
                this.sessao[i].data = dados.data
                this.sessao[i].tempo = dados.tempo
                this.sessao[i].config = false
                pronto = true
            }
            i++
        }
        this.gerarTabela()

    }
    //Exclui Sessao selecionada
    excluir(id) {
        this.dataUpdate() 
        if (window.confirm("Deseja Realmente excluir?")) {
            let i = 0
            let encontrou = false
            while (i < this.sessao.length && !encontrou) {
                if (this.sessao[i].id == id) {
                    encontrou = true
                    this.sessao.splice(i, 1)
                } else {
                    i++
                }
            }
           return this.sessao
        }else{
            return false
        }
    }
    //Recebe informações do controller para realizar tarefas selecionadas pelo usuario
    toSave(lex) {
       if(lex != null){
        if (lex.config == false) {
            this.addLocalStorage(lex)
        } else {
            this.saveEdit(lex)
        }
        this.limpar()
        this.localStorageUpdate()
        this.gerarTabela()
       }
        const ses = this.dados
        if (ses.config == false) {
            this.addLocalStorage(ses)
        } else {
            this.saveEdit(ses)
        }
        this.limpar()
        this.localStorageUpdate()
        this.gerarTabela()
    }
    //Envia mensagem de sucesso nas operações.
    msgSucefull() {
        return "Cadastro realizado com sucesso!!"
    }


}
