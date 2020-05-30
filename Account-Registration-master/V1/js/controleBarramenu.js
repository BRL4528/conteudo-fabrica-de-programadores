function fecharMenu() {
    document.getElementById("menu").classList.add("fechar-menu");
    document.getElementById("main").classList.remove("aumentar-main");
    document.getElementById("btn-menu").classList.add("btn-menu-abrir-exibir");
  }
  
  function abrirMenu() {
    document.getElementById("menu").classList.remove("fechar-menu");
    document.getElementById("main").classList.add("aumentar-main");  
    document.getElementById("btn-menu").classList.remove("btn-menu-abrir-exibir");
    document.getElementById("menu").classList.add("exibir-menu");
  }
  function fecharMensagem() {
    document.getElementById("mensagens").classList.remove("show");
  }