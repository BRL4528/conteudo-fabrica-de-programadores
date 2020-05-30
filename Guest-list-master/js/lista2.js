let contador = 0;
let idEdicao = null

class GerenciadorLista {

    salvar() {
        let nome = document.getElementById('inputConvidado').value
        let idade = document.getElementById('inputIdade').value
        let sexo = document.querySelector('[type=radio]:checked')

        let tabela = document.getElementById('lista')

        let linha = document.createElement('tr')
        let colunaNome = document.createElement('td')
        let colunaIdade = document.createElement('td')
        let colunaSexo = document.createElement('td')
        let colunaEditar = document.createElement('td')
        let colunaRemover = document.createElement('td')

        // let tabela = document.querySelector("#lista")

        // let linha = tabela.insertR
        linha.id = "item-" + contador
        contador ++

        colunaNome.innerText = nome
        colunaIdade.innerText = idade
        colunaSexo.innerText = sexo.value
        // imagemRemover.src = "img/delete.svg"
        // imagemEditar.src = "img/editar.svg"

        let imagemEditar = document.createElement('img')
        let imagemRemover = document.createElement('img')

       

        imagemEditar.setAttribute('src', 'img/editar.svg')
        imagemRemover.setAttribute('src', 'img/delete.svg')
        imagemRemover.setAttribute('onclick',` gerenciador.remover("${linha.id}")`)
        imagemEditar.setAttribute('onclick',` gerenciador.editar("${linha.id}")`)

        colunaEditar.appendChild(imagemEditar)
        colunaRemover.appendChild(imagemRemover)

        linha.appendChild(colunaNome)
        linha.appendChild(colunaIdade)
        linha.appendChild(colunaSexo)
        linha.appendChild(colunaEditar)
        linha.appendChild(colunaRemover)

        tabela.appendChild(linha)

        .inputConvidado.value = ""
        .inputIdade.value = ""
      

    }

    remover(id) {
        if (confirm("Tem certeza que deseja remover este convidado?"))
            document.getElementById(id).remove();
    }

    editar(id) {
        document.getElementById('inputConvidado').value = document.getElementById(id).children[0].textContent
        document.getElementById('inputIdade').value = document.getElementById(id).children[1].textContent
        document.getElementById('masc').value = document.getElementById(id).children[2].textContent
      
       
   
    }
}   

let gerenciador = new GerenciadorLista(); 
