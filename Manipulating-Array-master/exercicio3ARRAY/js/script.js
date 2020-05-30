class Gerenciador {

    constructor() {

        this.valor = []
        this.resultado = []

    }
    salvar() {

        let result = document.querySelector("#nome").value

        this.valor.push(result)

        document.querySelector("#valor1").innerHTML = this.valor

    }
    verificar() {

        let n = document.querySelector('#nome').value

        for (let i = 0; i < this.valor.length; i++) {

            if (n == this.valor[i]) {
                this.resultado.push(this.valor[i])

            }

            document.getElementById("valor2").innerHTML = `nome: <span style='color:red' >${n}</span> foi encontrado e, existe <span style='color:red' >${this.resultado.length} </span>  vezes`



        }







    }

}
let gerenciador = new Gerenciador() 