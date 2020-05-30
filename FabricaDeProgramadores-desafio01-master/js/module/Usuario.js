
export default class RegisterClient {
    constructor() {
     this.user = []
     this.dados = {}
     this.id = 1
     this.edit = null
  
    }
    //Adiciona Usuario no this.user
    addLocalStorage(dados) {
      this.id++
      dados.id = this.id
      this.user.push(dados);
    }
    //Lê todos os dados dos inputs
    lerDados(){
      this.dados = {
        nome: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#password").value,
        senhaRep: document.querySelector("#password-2").value,
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
        if (this.dados.email == "") {
          error += "Campo Email é obrigatório!\n";
        }
        if (this.dados.senha == "") {
          error += "Campo Senha obrigatório!\n";
        }
        if (this.dados.senhaRep == "") {
            error += "Campo Repita senha obrigatório!\n";
          }
          if (this.dados.senhaRep != this.dados.senha) {
            error += "Senhas não Batem!!\n";
          }
        let i = 0
        let found = false
        while (i < this.user.length && !found) {
          if (this.user[i].email == this.dados.email && this.user[i].config == false) {
             error = "Email ja cadastrado!!"
             found = true
          }
          i++   
         }
        return error;
      }
     
    }
    //Carrega dados LocalStorage
    dataUpdate() {
      if (localStorage.getItem("IDtableUser") && localStorage.getItem("tableUser") != null) {
        this.id = JSON.parse(localStorage.getItem("IDtableUser"))
        this.user = JSON.parse(localStorage.getItem("tableUser"))
      }
    }
   //Insere os dados no localStorage 
    localStorageUpdate() {
      localStorage.setItem("IDtableUser", JSON.stringify(this.id))
      localStorage.setItem("tableUser", JSON.stringify(this.user))
    }
    //Gera tabela com informações de usuarios e imagesn delet/edit
    gerarTabela(){
      let tabela = document.createElement("tbody")
      for(let i = 0; i < this.user.length; i++){
        let linha = tabela.insertRow()
        let colunaNome = linha.insertCell()
        let colunaEmail = linha.insertCell()
        let colunaEditar = linha.insertCell()
        let colunaExcluir = linha.insertCell()
  
        colunaNome.innerText = this.user[i].nome
        colunaEmail.innerText = this.user[i].email
  
        let imgEditar = document.createElement("img")
        imgEditar.src = "./img/edit.svg"
        imgEditar.setAttribute("id", `${this.user[i].id}`)
        imgEditar.setAttribute("name", `edit-user`)
        colunaEditar.appendChild(imgEditar)
  
        let imgExcluir = document.createElement("img")
        imgExcluir.setAttribute("id", `${this.user[i].id}`)
        imgExcluir.setAttribute("name", `delet-user`)
        imgExcluir.src = "./img/delete.svg"
        colunaExcluir.appendChild(imgExcluir)
      }
      return tabela
    }
    //Limpa os inputs da tela
    limpar(){
      document.querySelector("#username").value = ""
      document.querySelector("#email").value = ""
      document.querySelector("#password").value = ""
      document.querySelector("#password-2").value = ""
      document.querySelector("#temp1").innerText= ""
      document.querySelector("#temp").innerText= ""
    }
    //Prepara Usuario para ser editado
    editar(id){
      this.dataUpdate()
      let i = 0
      let pronto = false 
  
      while(i < this.user.length && !pronto) {
        if(this.user[i].id == id) {
  
          document.querySelector("#username").value = this.user[i].nome
          document.querySelector("#email").value = this.user[i].email
          document.querySelector("#password").value = this.user[i].senha
          document.querySelector("#temp").innerHTML = "Modo Edição do Item - "
          document.querySelector("#temp1").innerHTML = this.user[i].id
  
          this.user[i].config = true
          pronto = true
        }
        i++
      }
      this.localStorageUpdate()

    }
    //Salva Usuario editado
    saveEdit(dados){
      let i = 0 
      let pronto = false
  
      while(i < this.user.length && !pronto) {
        if (this.user[i].id == dados.id){
          this.user[i].nome  = dados.nome
          this.user[i].email  = dados.email
          this.user[i].senha  = dados.senha
          this.user[i].config  = false
          
          pronto = true
        }
        i++
      }
      this.gerarTabela()
  
    }
    //Exclui Usuario selecionado 
    excluir(id){
      if(confirm("Deseja Realmente excluir?")){
        this.dataUpdate()
        let i = 0
        let encontrou = false
        while( i < this.user.length && !encontrou){
          if(this.user[i].id == id){
            encontrou = true
            this.user.splice(i, 1)
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
       const user = this.dados
       if (user.config == false) {
           this.addLocalStorage(user)

       } else {
           this.saveEdit(user)
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
  