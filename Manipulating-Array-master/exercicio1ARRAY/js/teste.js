class Gerenciador{
    constructor(){
        this.number = []
        this.contador = 0
    }

    calcular(){
        let valores = document.querySelector("input#idade").value
        this.number[this.contador] = valores
        this.contador ++

        document.querySelector("input#idade").value = "" 
        document.getElementById("resultado").innerText = this.number            
    }

    imprimir(){
       
       document.getElementById("resultado").innerText = this.number

    }

    contador(){

        alert(this.number.length)
    }
    verificador(){
        
        let encontrou = false 
        let posicao = -1 
        for( let i = 0; i < this.number.length; i++ ){
            if( this.number[i] == document.querySelector("input#idade").value){
                encontrou = true
                posicao = i         
        } 
        }
        if(encontrou){
            alert(`O valor ${document.querySelector("input#idade").value}! está contido na posição ${posicao}!`)
        }else{
            alert(`O valor ${document.querySelector("input#idade").value}, não está contido!`)
        }
            
        
            
           
        

    }
}



gerenciador = new Gerenciador()