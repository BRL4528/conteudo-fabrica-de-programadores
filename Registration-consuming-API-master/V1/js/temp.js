class TempTest {
    constructor() {
        this.convidados = []
      
        this.edicao = null
    }
    salvar() {
        let convidados = this.lerDados()
        if(this.edicao == null){
            this.adicionarAPI()
        }else{
            this.salvarEdicao(convidados)
        }
       
        
        this.edicao = null
    }
    lerDados() {

        let convidado = {}

        convidado.nome = document.querySelector("#nome").value
        convidado.idade = document.querySelector("#idade").value
        convidado.sexo = document.querySelector("input[type=radio]:checked").value

        return convidado
    }


    carregarConvidados() {
        this.convidados = []
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.convidados = JSON.parse(xhttp.responseText)
                this.gerarTabela()
            }

        }
        xhttp.open("GET", "https://fdp-2018-modulo2.herokuapp.com/convidados", true);
        xhttp.send()
    }
    salvardadosAPI(convidado) {
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.carregarConvidados()
            }

        }
        xhttp.open("POST", "https://fdp-2018-modulo2.herokuapp.com/convidados", true)
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify(convidado))

    }
    gerarTabela() {
        let tabela = document.getElementById("recebe-tabela")
        tabela.innerHTML = ""
        for (let i = 0; i < this.convidados.length; i++) {

            var convidado = this.convidados[i]

            let linha = tabela.insertRow()
            let celulaNome = linha.insertCell()
            let celulaIdade = linha.insertCell()
            let celulaSexo = linha.insertCell()
            let celulaEditar = linha.insertCell()
            let celulaExcluir = linha.insertCell()

            celulaNome.innerHTML = convidado.nome
            celulaIdade.innerHTML = convidado.idade
            celulaSexo.innerHTML = convidado.sexo

            let imgEditar = document.createElement("img")
            imgEditar.setAttribute("onclick", `tempTestTempored.editar("${this.convidados[i]._id}")`)
            imgEditar.setAttribute("src", "img/resume.svg")
            celulaEditar.appendChild(imgEditar)

            let imgExluir = document.createElement("img")
            imgExluir.setAttribute("onclick", `tempTestTempored.excluir("${this.convidados[i]._id}")`)
            imgExluir.setAttribute("src", "img/delete.svg")
            celulaExcluir.appendChild(imgExluir)

        }
    }
    adicionarAPI() {

        let convidado = this.lerDados()
        this.salvardadosAPI(convidado)
        



    }
    editar(id) {

        let convidadoEditar;

        for (let i = 0; i < this.convidados.length; i++) {
            const conv = this.convidados[i];
            if (conv._id == id) {
                convidadoEditar = conv;
                break;
            }
        }

        document.getElementById("nome").value = convidadoEditar.nome;
        document.getElementById("idade").value = convidadoEditar.idade;

        if (convidadoEditar.sexo == "M") {
            document.getElementById("masc").checked = true;
        } else {
            document.getElementById("fem").checked = true;
        }

        this.edicao = convidadoEditar._id;

  
    }
    salvarEdicao(convidados){
       

        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.carregarConvidados()
            }

        }
        xhttp.open("PUT", `https://fdp-2018-modulo2.herokuapp.com/convidados/${this.edicao}`, true)
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify(convidados))

        


    }

       
    
    excluir(id) {


        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.convidados = JSON.parse(xhttp.responseText)
                this.carregarConvidados()
            }

        }
        xhttp.open("DELETE", `https://fdp-2018-modulo2.herokuapp.com/convidados/${id}`, true);
        xhttp.send()
    }






}
let tempTestTempored = new TempTest()
