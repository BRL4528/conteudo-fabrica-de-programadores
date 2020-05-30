
export default class RegisterClient {
    constructor() {
     this.sala = []
     this.dados = {}
     this.id = 1
     this.edit = null
  
    }
    //Adiciona Sala no this.sala
    addLocalStorage(dados) {
      this.id++
      dados.id = this.id
      this.sala.push(dados);
    }
    //Lê todos os dados dos inputs
    lerDados(){
      this.dados = {
        sala: document.querySelector("#nameRoom").value,
        config: document.querySelector("#temp").innerText,
        id: document.querySelector("#temp1").innerText
      }
    }
   // Verifica se existe erro nos dados inseridos
    errorMsg() {
      if(this.edit == null){
        this.dataUpdate()
  
        let error = "";
    
        if (this.dados.sala == "") {
          error += "Campo Sala é obrigatório!\n";
        }

        let i = 0
        let found = false
    
        while (i < this.sala.length && !found) {
          if (this.sala[i].sala == this.dados.sala && this.sala[i].config == false) {
             error = "Sala já existe no cadastro!!"
             found = true
          }
          i++   
         }
        return error;
      }
    }
    //Carrega dados do LocalStorage
    dataUpdate() {
      if (localStorage.getItem("IDtableSala") && localStorage.getItem("tableSala") != null) {
        this.id = JSON.parse(localStorage.getItem("IDtableSala"))
        this.sala = JSON.parse(localStorage.getItem("tableSala"))
      }
    }
   //Insere os dados no localStorage 
    localStorageUpdate() {
      localStorage.setItem("IDtableSala", JSON.stringify(this.id))
      localStorage.setItem("tableSala", JSON.stringify(this.sala))
    }
    //Gera tabela com informações de Salas e imagens delet/edit
    gerarTabela(){
      
      let tabela = document.createElement("tbody")
      
      for(let i = 0; i < this.sala.length; i++){
        let linha = tabela.insertRow()
  
        let colunaSala = linha.insertCell()
        let colunaEditar = linha.insertCell()
        let colunaExcluir = linha.insertCell()
  
        colunaSala.innerText = this.sala[i].sala
  
        let imgEditar = document.createElement("img")
        imgEditar.src = "./img/edit.svg"
        imgEditar.setAttribute("id", `${this.sala[i].id}`)
        imgEditar.setAttribute("name", `edit-sala`)
        colunaEditar.appendChild(imgEditar)
  
        let imgExcluir = document.createElement("img")
        imgExcluir.setAttribute("id", `${this.sala[i].id}`)
        imgExcluir.setAttribute("name", `delet-sala`)
        imgExcluir.src = "./img/delete.svg"
        colunaExcluir.appendChild(imgExcluir)
  
      }
      return tabela
    }
    //Limpa os inputs da tela
    limpar(){
      document.querySelector("#nameRoom").value = ""
      document.querySelector("#temp1").innerText= ""
      document.querySelector("#temp").innerText= ""
    }
    //Prepara Sala para ser editada
    editar(id){
      this.dataUpdate()
      let i = 0
      let pronto = false 
  
      while(i < this.sala.length && !pronto) {
        if(this.sala[i].id == id) {
  
          document.querySelector("#nameRoom").value = this.sala[i].sala
          document.querySelector("#temp").innerHTML = "Modo Edição do Item - "
          document.querySelector("#temp1").innerHTML = this.sala[i].id
  
          this.sala[i].config = true
          pronto = true
        }
        i++
      }
      this.localStorageUpdate()
    }
    //Salva sala editada
    saveEdit(dados){
      let i = 0 
      let pronto = false
  
      while(i < this.sala.length && !pronto) {
        if (this.sala[i].id == dados.id){
          this.sala[i].sala  = dados.sala
          this.sala[i].config  = false
  
          pronto = true
        }
        i++
      }
      this.gerarTabela()
  
    }
    //Exclui sala selecionado 
    excluir(id){
  
      if(confirm("Deseja Realmente excluir?")){
        this.dataUpdate()
        let i = 0
        let encontrou = false
        while( i < this.sala.length && !encontrou){
          if(this.sala[i].id == id){
            encontrou = true
            this.sala.splice(i, 1)
          }else{
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
      const row = this.dados
  
      if (row.config == false) {
        this.addLocalStorage(row)
   
      }else{
        this.saveEdit(row)
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
  