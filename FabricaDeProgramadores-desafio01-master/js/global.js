// Manipula mensagem em tela
export default class Global{
    mensagem(){
        let msg = document.getElementById("textoMensagem").innerText
        if (msg != "") {
           document.getElementById("mensagem").classList.remove("show")
        } else {
           document.getElementById("msgSecess").classList.remove("show")
        }
        document.getElementById("textoMensagem").innerText = ""
    }
   
 
}