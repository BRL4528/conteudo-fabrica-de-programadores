let contador = 0;
let idEdicao = null
class GerenciadorLista {
    salvar() {
        let nome = document.getElementById('inputConvidado').value
        let idade = document.getElementById('inputIdade').value
        let sexo = document.querySelector('[type=radio]:checked')

        if (nome == "", idade == "" ){
            alert("Preencha o campo nome!");
        } else {

            if (idEdicao == null) {
        let tabela = document.getElementById('lista')

        let linha = tabela.insertRow(0)
        let col1 = linha.insertCell(0)
        let col2 = linha.insertCell(1)
        let col3 = linha.insertCell(2)
        let col4 = linha.insertCell(3)
        let col5 = linha.insertCell(4)

        col1.innerText = nome
        col2.innerText = idade
        col3.innerText = sexo.value

        linha.id = "item-" + contador
        contador++

        let imagemEditar = document.createElement('img')
        let imagemRemover = document.createElement('img')

        imagemEditar.setAttribute('src', 'img/editar.svg')
        imagemRemover.setAttribute('src', 'img/delete.svg')
        imagemRemover.setAttribute('onclick', ` gerenciador.remover("${linha.id}")`)
        imagemEditar.setAttribute('onclick', ` gerenciador.editar("${linha.id}")`)

        col4.appendChild(imagemEditar)
        col5.appendChild(imagemRemover)

    }
     else {
    document.getElementById(idEdicao).children[0].innerText = nome
    document.getElementById(idEdicao).children[1].innerText = idade
    idEdicao = null
   }
}
        }
    remover(id) {
        if (confirm("Tem certeza que deseja remover este convidado?"))
            document.getElementById(id).remove();
    }
    editar(id) {
        idEdicao = id
        document.getElementById('inputConvidado').value = document.getElementById(id).children[0].textContent
        document.getElementById('inputIdade').value = document.getElementById(id).children[1].textContent
        document.getElementById('masc').value = document.getElementById(id).children[2].textContent
    }


    
}
let gerenciador = new GerenciadorLista(); 
