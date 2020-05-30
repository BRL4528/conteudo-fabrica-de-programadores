
export default class RegisterClient {
  constructor() {
   this.client = []
   this.dados = {}
   this.nome
   this.id = 1
   this.edit = null

  }
  //Adiciona clientes no this.client
  addLocalStorage(dados) {
    this.id++
    dados.id = this.id
    this.client.push(dados);
  }
  //Lê todos os dados dos inputs
  lerDados(){
    this.dados = {
      nome: document.querySelector("#nameClient").value,
      idade: document.querySelector("#ageClient").value,
      email: document.querySelector("#emailClient").value,
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
  
      if (this.dados.idade == "") {
        error += "Campo Idade é obrigatório!\n";
      }
  
      if (this.dados.email == "") {
        error += "Campo Email obrigatório!\n";
      }
  
      let i = 0
      let found = false
  
      while (i < this.client.length && !found) {
        if (this.client[i].email == this.dados.email && this.client[i].config == false) {
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
    if (localStorage.getItem("IDtableClient") && localStorage.getItem("tableClient") != null) {
      this.id = JSON.parse(localStorage.getItem("IDtableClient"))
      this.client = JSON.parse(localStorage.getItem("tableClient"))
    }
  }
 //Insere os dados no localStorage 
  localStorageUpdate() {
    localStorage.setItem("IDtableClient", JSON.stringify(this.id))
    localStorage.setItem("tableClient", JSON.stringify(this.client))
  }
  //Gera tabela com informações de usuarios e imagesn delet/edit
  gerarTabela(){
    
    let tabela = document.createElement("tbody")
    
    for(let i = 0; i < this.client.length; i++){
      let linha = tabela.insertRow()

      let colunaNome = linha.insertCell()
      let colunaIdade = linha.insertCell()
      let colunaEmail = linha.insertCell()
      let colunaEditar = linha.insertCell()
      let colunaExcluir = linha.insertCell()

      colunaNome.innerText = this.client[i].nome
      colunaIdade.innerText = this.client[i].idade
      colunaEmail.innerText = this.client[i].email

      let imgEditar = document.createElement("img")
      imgEditar.src = "./img/edit.svg"
      imgEditar.setAttribute("id", `${this.client[i].id}`)
      imgEditar.setAttribute("name", `edit-client`)
      colunaEditar.appendChild(imgEditar)

      let imgExcluir = document.createElement("img")
      imgExcluir.setAttribute("id", `${this.client[i].id}`)
      imgExcluir.setAttribute("name", `delet-client`)
      imgExcluir.src = "./img/delete.svg"
      colunaExcluir.appendChild(imgExcluir)

    }
    return tabela
  }
  //Limpa os inputs da tela
  limpar(){
    document.querySelector("#nameClient").value = ""
    document.querySelector("#ageClient").value = ""
    document.querySelector("#emailClient").value = ""
    document.querySelector("#temp1").innerText= ""
    document.querySelector("#temp").innerText= ""
  }
  //Prepara cliente para ser editado
  editar(id){
    this.dataUpdate()
    let i = 0
    let pronto = false 

    while(i < this.client.length && !pronto) {
      if(this.client[i].id == id) {

        document.querySelector("#nameClient").value = this.client[i].nome
        document.querySelector("#ageClient").value = this.client[i].idade
        document.querySelector("#emailClient").value = this.client[i].email
        document.querySelector("#temp").innerHTML = "Modo Edição do Item - "
        document.querySelector("#temp1").innerHTML = this.client[i].id

        this.client[i].config = true
        pronto = true
      }
      i++
    }
    this.localStorageUpdate()
    this.edit = id
    let cli = this.nome
    return cli
  }
  //Salva cliente editado
  saveEdit(dados){
    let i = 0 
    let pronto = false

    while(i < this.client.length && !pronto) {
      if (this.client[i].id == dados.id){
        this.client[i].nome  = dados.nome
        this.client[i].idade  = dados.idade
        this.client[i].email  = dados.email
        this.client[i].config  = false
        

        pronto = true
      }
      i++
    }
    this.gerarTabela()

  }
  //Exclui cliente selecionado 
  excluir(id){

    if(confirm("Deseja Realmente excluir?")){
      this.dataUpdate()
      let i = 0
      let encontrou = false
      while( i < this.client.length && !encontrou){
        if(this.client[i].id == id){
          encontrou = true
          this.client.splice(i, 1)
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
    const cli = this.dados

    if (cli.config == false) {
      this.addLocalStorage(cli)
 
    }else{
      this.saveEdit(cli)
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
