export default class GerenciadorFilme{
    constructor() {
     this.filmes = []
     this.dados = {}
     this.id = 1
     this.edit = null
  
    }
    //Adiciona filmes no this.filmes
    addLocalStorage(dados) {
      this.id++
      dados.id = this.id
      this.filmes.push(dados);
    }
    //Lê todos os dados dos inputs
    lerDados(){
      this.dados = {
        nome: document.querySelector("#nameMovie").value,
        duracao: document.querySelector("#durationMovie").value,
        classification: document.querySelector("#classificationMovie").value,
        genero: document.querySelector("#genreMovie").value,
        sinopsis: document.querySelector("#synopsisMovie").value,
        config: document.querySelector("#temp").innerText,
        id: document.querySelector("#temp1").innerText
      }
    }
   // Verifica se existe erro nos dados inseridos
    errorMsg() {
      if(this.edit == null){
        this.dataUpdate()
  
        let error = "";
    
        if (this.dados.nome == "") {
          error += "Campo nome é obrigatório!\n";
        }
    
        if (this.dados.duracao == "") {
          error += "Campo Duração é obrigatório!\n";
        }
    
        if (this.dados.classification == "") {
          error += "Campo Classificação é obrigatório!\n";
        }
        if (this.dados.genero == "") {
            error += "Campo Gênero obrigatório!\n";
          }
          if (this.dados.sinopsis == "") {
            error += "Campo Sinopsis obrigatório!\n";
          }
    
    
        let i = 0
        let found = false
    
        while (i < this.filmes.length && !found) {
          if (this.filmes[i].nome == this.dados.nome && this.filmes[i].config == false) {
             error = "Filme Já Cadastrado!!"
             found = true
    
          }
          i++   
         }
    
        return error;
      }
     
    }
    //Carrega dados do LocalStorage
    dataUpdate() {
      if (localStorage.getItem("IDtableFilmes") && localStorage.getItem("tableFilmes") != null) {
        this.id = JSON.parse(localStorage.getItem("IDtableFilmes"))
        this.filmes = JSON.parse(localStorage.getItem("tableFilmes"))
      }
    }
   //Insere os dados no localStorage 
    localStorageUpdate() {
      localStorage.setItem("IDtableFilmes", JSON.stringify(this.id))
      localStorage.setItem("tableFilmes", JSON.stringify(this.filmes))
    }
    //Gera tabela com informações dos Filmes e imagens de delet/edit
    gerarTabela(){
      
      let tabela = document.createElement("tbody")
      
      for(let i = 0; i < this.filmes.length; i++){
        let linha = tabela.insertRow()
  
        let colunaNome = linha.insertCell()
        let colunaDuracao = linha.insertCell()
        let colunaClassification = linha.insertCell()
        let colunaGenero = linha.insertCell()
        let colunaSinopsis = linha.insertCell()
        let colunaEditar = linha.insertCell()
        let colunaExcluir = linha.insertCell()
  
        colunaNome.innerText = this.filmes[i].nome
        colunaDuracao.innerText = this.filmes[i].duracao
        colunaClassification.innerText = this.filmes[i].classification
        colunaGenero.innerText = this.filmes[i].genero
        colunaSinopsis.innerText = this.filmes[i].sinopsis
  
        let imgEditar = document.createElement("img")
        imgEditar.src = "./img/edit.svg"
        imgEditar.setAttribute("id", `${this.filmes[i].id}`)
        imgEditar.setAttribute("name", `edit-filme`)
        colunaEditar.appendChild(imgEditar)
  
        let imgExcluir = document.createElement("img")
        imgExcluir.setAttribute("id", `${this.filmes[i].id}`)
        imgExcluir.setAttribute("name", `delet-filme`)
        imgExcluir.src = "./img/delete.svg"
        colunaExcluir.appendChild(imgExcluir)
  
      }
      return tabela
    }
    //Limpa os inputs da tela
    limpar(){
      document.querySelector("#nameMovie").value = ""
      document.querySelector("#durationMovie").value = ""
      document.querySelector("#classificationMovie").value = ""
      document.querySelector("#genreMovie").value = ""
      document.querySelector("#synopsisMovie").value = ""
      document.querySelector("#temp1").innerText= ""
      document.querySelector("#temp").innerText= ""
    }
    //Prepara o Filme para ser editado
    editar(id){
      this.dataUpdate()
      let i = 0
      let pronto = false 
  
      while(i < this.filmes.length && !pronto) {
        if(this.filmes[i].id == id) {
  
          document.querySelector("#nameMovie").value = this.filmes[i].nome
          document.querySelector("#durationMovie").value = this.filmes[i].duracao
          document.querySelector("#classificationMovie").value = this.filmes[i].classification
          document.querySelector("#genreMovie").value = this.filmes[i].genero
          document.querySelector("#synopsisMovie").value = this.filmes[i].sinopsis
          document.querySelector("#temp").innerHTML = "Modo Edição do Item - "
          document.querySelector("#temp1").innerHTML = this.filmes[i].id
  
          this.filmes[i].config = true
          pronto = true
        }
        i++
      }
      this.localStorageUpdate()
      this.edit = id
     
    }
    //Salva o Filme editado
    saveEdit(dados){
      let i = 0 
      let pronto = false
  
      while(i < this.filmes.length && !pronto) {
        if (this.filmes[i].id == dados.id){
          this.filmes[i].nome  = dados.nome
          this.filmes[i].duracao  = dados.duracao
          this.filmes[i].classification  = dados.classification
          this.filmes[i].genero  = dados.genero
          this.filmes[i].sinopsis  = dados.sinopsis
          this.filmes[i].config  = false
          
  
          pronto = true
        }
        i++
      }
      this.gerarTabela()
  
    }
    //Exclui Filme selecionado 
    excluir(id){
      if(confirm("Deseja Realmente excluir?")){
        this.dataUpdate()
        let i = 0
        let encontrou = false
        while( i < this.filmes.length && !encontrou){
          if(this.filmes[i].id == id){
            encontrou = true
            this.filmes.splice(i, 1)
          }else{
            i++
          }
        }
        return this.sessao
      }else{
          return false
      }
    }
    //Recebe informações do controller para realizar tarefa selecionada pelo usuario
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
      const movie = this.dados
  
      if (movie.config == false) {
        this.addLocalStorage(movie)
   
      }else{
        this.saveEdit(movie)
      }
      this.limpar()
      this.localStorageUpdate()
      this.gerarTabela()
    }
    //Envia mensagem de sucesso nas operações.
    msgSucefull(){
      return "Cadastro realizado com sucesso!!"
    }
  
  }
  