import Cliente from "./module/Cliente.js";
import Filme from "./module/Filme.js";
import Usuario from "./module/Usuario.js";
import Sala from "./module/Sala.js";
import Sessao from "./module/Sessao.js";

import Global from "./global.js"

//Eventos Globais 

/**
 * Manipula a mensagem em tela.
*/
function mensagem() {
   let msg = new Global();
   msg.mensagem()
 }

 /**
 * Verifica se existe algum evento na tela, se haver destina a execução correta.
*/
const el = document.getElementById('table-body');
el.addEventListener('click', function (e) {
   if (e.target.name == "edit-client") {
      editarClient(e.target.id)
   } 
   if(e.target.name == "edit-filme"){
      editarFilme(e.target.id)
   }
   if(e.target.name == "edit-user"){
      editarUser(e.target.id)
   }
   if(e.target.name == "edit-sala"){
      editarRow(e.target.id)
   }
   if(e.target.name == "edit-sessao"){
      editarSes(e.target.id)
   }
   if(e.target.name == "delet-client"){
      excluirClient(e.target.id)  
   }
   if(e.target.name == "delet-filme"){
      excluirFilme(e.target.id)  
   }
   if(e.target.name == "delet-user"){
      excluirUser(e.target.id)  
   }
   if(e.target.name == "delet-sala"){
      excluirRow(e.target.id)  
   }
   if(e.target.name == "delet-sessao"){
      excluirSes(e.target.id)  
   }
 
});

 /**
 * Identifica qual tela esta ativa para realizar onload.
*/
function verifica(){
   if(document.activeElement.id == "onload-client"){
      onloadClient()
   }
   if(document.activeElement.id == "onload-filme"){
      onloadFilme() 
   }
   if(document.activeElement.id == "onload-user"){
      onloadUser() 
   } 
   if(document.activeElement.id == "onload-sala"){
      onloadRow() 
   }  
   if(document.activeElement.id == "onload-sessao"){
      onloadSes() 
   }  
}
/**
 * Identifica o evento click
 */
function botao(){
   if(document.activeElement.name == "save-client"){
      client()
   }
   if(document.activeElement.name == "save-filme"){
      filme() 
   }
   if(document.activeElement.name == "save-user"){
      usuario() 
   }
   if(document.activeElement.name == "save-sala"){
      sala() 
   }
   if(document.activeElement.name == "save-sessao"){
      sessao() 
   }
   if(document.activeElement.name == "cancel-client"){
      cancelClient()
   }
   if(document.activeElement.name == "cancel-filme"){
      cancelFilme()
   }
   if(document.activeElement.name == "cancel-user"){
      cancelUser()
   }
   if(document.activeElement.name == "cancel-sala"){
      cancelRow()
   }
   if(document.activeElement.name == "cancel-sessao"){
      cancelSes()
   }
}

//Cliente
function client() {
   let cli = new Cliente();
   cli.lerDados()
   const error = cli.errorMsg()
   if (error != "") {
      document.getElementById("textoMensagem").innerText = error;
      document.getElementById("mensagem").classList.add("show");

   } else {
      cli.toSave()
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(cli.gerarTabela())
      document.getElementById("text").innerText = cli.msgSucefull();
      document.getElementById("msgSecess").classList.add("show");
      cli.limpar()
   }

}
function onloadClient() {
   let cli = new Cliente();
   cli.dataUpdate()
   document.getElementById("table-body").appendChild(cli.gerarTabela())
}
function editarClient(id) {
   let cli = new Cliente();
   cli.editar(id)

}
function excluirClient(id) {
   let cli = new Cliente();
   let atual = cli.excluir(id)
   if(atual != false){
      cli.toSave(atual)
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(cli.gerarTabela())
      cli.dataUpdate()
   }
}
function cancelClient(){
   let cli = new Cliente();
   cli.limpar()
}


//Filmes
function filme() {
   let movie = new Filme();
   movie.lerDados()
   const error = movie.errorMsg()
   if (error != "") {
      document.getElementById("textoMensagem").innerText = error;
      document.getElementById("mensagem").classList.add("show");

   } else {
      movie.toSave()
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(movie.gerarTabela())
      document.getElementById("text").innerText = movie.msgSucefull();
      document.getElementById("msgSecess").classList.add("show");
      movie.limpar()
   }

}
function onloadFilme() {
   let movie = new Filme();
   movie.dataUpdate()
   document.getElementById("table-body").appendChild(movie.gerarTabela())
}
function editarFilme(id) {
   let movie = new Filme();
   movie.editar(id)

}
function excluirFilme(id) {
   let movie = new Filme();
   let atual = movie.excluir(id)
   if(atual != false){
      movie.toSave(atual)
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(movie.gerarTabela())
      movie.dataUpdate()
   }
}
function cancelFilme(){
   let movie = new Filme();
   movie.limpar()
}

//Usuario
function usuario() {
   let user = new Usuario();
   user.lerDados()
   const error = user.errorMsg()
   if (error != "") {
      document.getElementById("textoMensagem").innerText = error;
      document.getElementById("mensagem").classList.add("show");

   } else {
      user.toSave()
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(user.gerarTabela())
      document.getElementById("text").innerText = user.msgSucefull();
      document.getElementById("msgSecess").classList.add("show");
      user.limpar()
   }

}
function onloadUser() {
   let user = new Usuario();
   user.dataUpdate()
   document.getElementById("table-body").appendChild(user.gerarTabela())
}
function editarUser(id) {
   let user = new Usuario();
   user.editar(id)

}
function excluirUser(id) {
   let user = new Usuario();
   let atual = user.excluir(id)
   if(atual != false){
      user.toSave(atual)
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(user.gerarTabela())
      user.dataUpdate()
   }
}
function cancelUser(){
   let user = new Usuario();
   user.limpar()
}

// Salas
function sala() {
   let row = new Sala();
   row.lerDados()
   const error = row.errorMsg()
   if (error != "") {
      document.getElementById("textoMensagem").innerText = error;
      document.getElementById("mensagem").classList.add("show");

   } else {
      row.toSave()
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(row.gerarTabela())
      document.getElementById("text").innerText = row.msgSucefull();
      document.getElementById("msgSecess").classList.add("show");
      row.limpar()
   }

}
function onloadRow() {
   let row = new Sala();
   row.dataUpdate()
   document.getElementById("table-body").appendChild(row.gerarTabela())
}
function editarRow(id) {
   let row = new Sala();
   row.editar(id)

}
function excluirRow(id) {
   let row = new Sala();
   let atual = row.excluir(id)
   if(atual != false){
      row.toSave(atual)
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(row.gerarTabela())
      row.dataUpdate()
   }
 
}
function cancelRow(){
   let row = new Sala();
   row.limpar()
}

// Sessao
function sessao() {
   let ses = new Sessao();
   ses.lerDados()
   const error = ses.errorMsg()
   if (error != "") {
      document.getElementById("textoMensagem").innerText = error;
      document.getElementById("mensagem").classList.add("show");

   } else {
      ses.toSave()
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(ses.gerarTabela())
      document.getElementById("text").innerText = ses.msgSucefull();
      document.getElementById("msgSecess").classList.add("show");
      ses.dataUpdate()
   }

}
function onloadSes() {
   let ses = new Sessao();
   ses.dataUpdate()
   document.getElementById("table-body").appendChild(ses.gerarTabela())
}
function editarSes(id) {
   let ses = new Sessao();
   ses.editar(id)
}
function excluirSes(id) {
   let ses = new Sessao();
   let atual = ses.excluir(id)
   if(atual != false){
      ses.toSave(atual)
      const tabela = document.getElementById("table-body")
      tabela.innerHTML = ""
      document.getElementById("table-body").appendChild(ses.gerarTabela())
      ses.dataUpdate()
   }
 
  
   
}
function cancelSes(){
   let ses = new Sessao();
   ses.limpar()
}
document
   .querySelector("#save")
   .addEventListener("click", botao)
document
   .querySelector("#cancel")
   .addEventListener("click", botao)
document
   .querySelector("#msg1")
   .addEventListener("click", mensagem)
document
   .querySelector("#msg2")
   .addEventListener("click", mensagem)
window
   .addEventListener("load", verifica)




  
   




