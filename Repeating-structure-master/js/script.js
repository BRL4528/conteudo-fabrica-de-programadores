class Gerenciador {

    constructor() {
        this.numeros = []
        this.numeroTrabalho = []
        this.contador = ""
        this.resultado = []
        this.numeroReservado = []


    }

    verificarImpar() {
        for (let i = 0; i < 101; i++) {
            if (i % 2 != 0) {
                this.numeros.push(i)
            }
        }
        this.imprimir(1)

    }
    imprimir(idTemp) {
        if (idTemp == 1) {

            let primaria = document.querySelector("#operacao")

            let div = document.createElement("div")
            let div2 = document.createElement("div")
            let voltar = document.createElement("button")

            div.setAttribute("id", "boxOperacao")
            voltar.innerText = "Voltar"

            primaria.appendChild(div)
            div.appendChild(div2)
            div.appendChild(voltar)


            voltar.setAttribute("onclick", "gerenciador.excluir()")
            div2.innerHTML = this.numeros


           



        } else if (idTemp == 2) {
            let primaria = document.querySelector("#operacao")
            let desc = document.createElement("h2")
            let desc2 = document.createElement("h3")
            let desc3 = document.createElement("h3")
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let input = document.createElement("input")
            let pesquisar = document.createElement("button")
            let voltar = document.createElement("button")

            input.setAttribute("id", "valorTemp")
            input.setAttribute("placeholder", "Digite o nome Aqui...")
            desc2.innerHTML = "Você possue"
            desc2.setAttribute("class", "desc2")
            desc.innerHTML = "3"
            desc3.innerHTML = "Tentativas"
            desc3.setAttribute("class", "desc3")
            desc.setAttribute("id", "tentativas")
            pesquisar.innerText = "Pesquisar"
            voltar.innerText = "Voltar"
            pesquisar.setAttribute("id", "btPesquisar")
            pesquisar.setAttribute("onclick", "gerenciador.nomeSecreto()")
            voltar.setAttribute("onclick", "gerenciador.excluir()")
            div1.setAttribute("id", "boxOperacao")

            primaria.appendChild(div1)
            div1.appendChild(desc2)
            div1.appendChild(desc3)
            div1.appendChild(desc)
            div1.appendChild(input)
            div2.appendChild(pesquisar)
            div2.appendChild(voltar)
            div1.appendChild(div2)


        } else if (idTemp == 3) {
            let primaria = document.querySelector("#operacao")

            let input = document.createElement("input")
            let pesquisar = document.createElement("button")
            let voltar = document.createElement("button")
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let div3 = document.createElement("div")
            let label = document.createElement("label")

            div1.setAttribute("id", "boxOperacao")
            input.setAttribute("id", "numero")
            input.setAttribute("placeholder", "Digite o valor Aqui!!...")
            div2.setAttribute("id", "quantidade")
            div3.setAttribute("id", "resultado")
            pesquisar.innerText = "Pesquisar"
            voltar.innerText = "Voltar"
            label.innerText = "Digite o valor Limite: "
            pesquisar.setAttribute("id", "btPesquisar")
            pesquisar.setAttribute("onclick", "gerenciador.ocorrencia()")
            voltar.setAttribute("onclick", "gerenciador.excluir()")

            primaria.appendChild(div1)
            div1.appendChild(label)
            div1.appendChild(input)
            div1.appendChild(pesquisar)
            div1.appendChild(voltar)
            div1.appendChild(div2)
            div1.appendChild(div3)


        }

    }
    imprimiResultado() {
        document.querySelector("#quantidade").innerHTML = "Qtd:" + this.resultado.length
        document.querySelector("#resultado").innerHTML = this.resultado

        this.numeros = []
        this.numeroTrabalho = []
        this.contador = ""
        this.resultado = []



    }
    
    nomeSecreto() {
        var pessoa = document.querySelector("#valorTemp").value
        do {
            let tentativa = parseFloat(document.querySelector("#tentativas").innerText)
            tentativa--
            document.querySelector("#tentativas").innerHTML = tentativa
            if (pessoa == "maria") {
                this.excluir()
                alert("Nome Certo")

                return true
            } else if (tentativa == 0) {
                this.excluir()
                alert("Nome não encontrado")
                alert("você não possue mais tentativas")
                return true
            }
        } while (pessoa == "maria");

        alert("Nome não encontrado")
    }
    ocorrencia() {
        this.numeros = []


        let numeros = document.querySelector("#numero").value

        while (this.contador != numeros) {

            numeros++
            for (let i = 0; i < numeros; i++) {

                //abre para trabalho

                this.numeros.push(i)
                let x = this.numeros[i]
                let y = x.toString()
                this.numeroTrabalho = y.split('')

                this.contador++

                //trabalho numero

                for (let j = 0; j < this.numeroTrabalho.length; j++) {
                    if (this.numeroTrabalho[j] == "1") {

                        //contatena

                        let vax = ""
                        for (let w = 0; w < this.numeroTrabalho.length; w++) {

                            this.numeroTrabalho[w] = vax + this.numeroTrabalho[w]
                            this.numeroReservado += this.numeroTrabalho[w]
                        }

                        this.resultado.push(this.numeroReservado)
                        this.numeroReservado = []



                    }

                }

            }

        }

        this.imprimiResultado()



    }

    seletor() {
        let opcao = document.querySelector("#opcao").value
        if (opcao == 1) {
            this.verificarImpar()
        }
        else if (opcao == 2) {
            this.imprimir(opcao)

        } else if (opcao == 2) {
            this.imprimir(opcao)

        } else if (opcao == 3) {
            this.imprimir(opcao)
        } else if (opcao == 4) {
            let x = confirm("Tem Certeza")

            if (x == true) {

                open("C:/Users/bruno/Documents/Fabrica%20de%20Programador/ExercicioMenu/end.html")
                // closed("C:/Users/bruno/Documents/Fabrica%20de%20Programador/ExercicioMenu/index.html")
            }



        }
    }
    excluir() {
        document.querySelector("#boxOperacao").remove()

    }


}

let gerenciador = new Gerenciador()