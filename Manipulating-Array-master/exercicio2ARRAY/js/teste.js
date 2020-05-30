class Gerenciador{
    constructor(){
        this.number = []
        this.contador = 0
        this.pares = 0
        this.impares = 0
    }

    calcular(){
      
        let valores = document.querySelector("input#idade").value
        this.number[this.contador] = valores
        this.contador ++ 

        document.querySelector("input#idade").value = "" 
                  
    }

    imprimir(){
       
       document.getElementById("resultado").innerText = this.number

    }

    identificador(){
       
        let encontrou = false 
    
        for( let i = 0; i < this.number.length; i++ ){
            if( this.number[i] == document.querySelector("input#idade").value){
                encontrou = true

                   
        } 
        }
        if(encontrou){
          document.querySelector("input#idade").value 
          alert(ok)

        }else{
            alert(`O valor ${document.querySelector("input#idade").value}, não está contido!`)
        }
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
    inverter(){
        document.getElementById("resultado2").innerText = this.number.slice(0).reverse()  
    }
    separar(){

        for( let i = 0; i < this.number.length; i++ ){
            if( this.number[i] % 2 == 0){
                this.pares.push(this.number[i])
                      
        } else{ 
            
            this.impares.push(this.number[i])

        }
        }

        document.getElementById(par).innerText = this.pares
        document.getElementById(impar).innerText = this.impares
    }
}



gerenciador = new Gerenciador()