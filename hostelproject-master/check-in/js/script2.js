class Gerenciar {
    checkinInsert() {
        document.querySelector('h1#titulo').remove()
        document.querySelector("button#bt").remove()

        let ttl = document.createElement('h1')
        let nome = document.createElement('input')
        let email = document.createElement('input')
        let phone = document.createElement('input')
        let cel = document.createElement('input')
        let occupation = document.createElement('input')
        let nacionality = document.createElement('input')
        let labelDate = document.createElement('label')
        let inputDate = document.createElement('input')
        let labelSexo = document.createElement('label')
        let labelMasc = document.createElement('label')
        let radioMasc = document.createElement('input')
        let labelFem = document.createElement('label')
        let radioFem = document.createElement('input')
        let rg = document.createElement('input')
        let expedidor = document.createElement('input')
        let cpf = document.createElement('input')
        let passport = document.createElement('input')
        let address = document.createElement('input')
        let city = document.createElement('input')
        let state = document.createElement('label')
        let selectState = document.createElement('select')
        let optState1 = document.createElement('option')
        let country = document.createElement('label')
        let selectCountry = document.createElement('select')
        let optCountry1 = document.createElement('option')
        let arriving = document.createElement('input')
        let destination = document.createElement('input')
        let entry = document.createElement('input')
        let exit = document.createElement('input')
        let buttonNext1 = document.createElement('button')

        let card = document.querySelector('div#main2')

        let divSexo = document.createElement('div')
        let divSection1 = document.createElement('div')
        let divSection2 = document.createElement('div')
        let divSection3 = document.createElement('div')
        let divSection4 = document.createElement('div')
        let divSection5 = document.createElement('div')


        card.appendChild(ttl)

        divSection1.appendChild(nome)
        divSection1.appendChild(email)
        divSection1.appendChild(phone)
        divSection1.appendChild(cel)
        card.appendChild(divSection1)

        divSection2.appendChild(occupation)
        divSection2.appendChild(nacionality)
        divSection2.appendChild(labelDate)
        divSection2.appendChild(inputDate)
        divSexo.appendChild(labelSexo)
        divSexo.appendChild(labelMasc)
        divSexo.appendChild(radioMasc)
        divSexo.appendChild(labelFem)
        divSexo.appendChild(radioFem)
        divSection2.appendChild(divSexo)
        card.appendChild(divSection2)

        divSection3.appendChild(rg)
        divSection3.appendChild(expedidor)
        divSection3.appendChild(cpf)
        divSection3.appendChild(passport)
        card.appendChild(divSection3)

        divSection4.appendChild(address)
        divSection4.appendChild(city)
        divSection4.appendChild(state)
        divSection4.appendChild(selectState)
        selectState.appendChild(optState1)
        divSection4.appendChild(country)
        divSection4.appendChild(selectCountry)
        selectCountry.appendChild(optCountry1)
        card.appendChild(divSection4)

        divSection5.appendChild(arriving)
        divSection5.appendChild(destination)
        divSection5.appendChild(entry)
        divSection5.appendChild(exit)
        card.appendChild(divSection5)

        card.appendChild(buttonNext1)



        //Titulo da segunda Pagina + atributos

        divSection1.setAttribute('class', 'model')
        divSection1.setAttribute('id', 'model-1')
        divSection2.setAttribute('class', 'model')
        divSection2.setAttribute('id', 'model-2')
        divSection3.setAttribute('class', 'model')
        divSection3.setAttribute('id', 'model-3')
        divSection4.setAttribute('class', 'model')
        divSection4.setAttribute('id', 'model-4')
        divSection5.setAttribute('class', 'model')
        divSection5.setAttribute('id', 'model-5')
        
        ttl.setAttribute('id', 'ttl-1')
        ttl.innerText = "Check-in"

        nome.setAttribute('id', 'name-1')
        nome.setAttribute("placeholder", "Nome")
        nome.setAttribute("class", "class-one")
        nome.setAttribute("type", "text")

        email.setAttribute('id', 'email-1')
        email.setAttribute("placeholder", "E-mail")
        email.setAttribute("class", "class-one")
        email.setAttribute("type", "email")


        phone.setAttribute('id', 'phone-1')
        phone.setAttribute("placeholder", "Phone")
        phone.setAttribute("class", "class-one")
        phone.setAttribute("type", "number")

        cel.setAttribute('id', 'cel-1')
        cel.setAttribute("placeholder", "Cel")
        cel.setAttribute("class", "class-one")
        cel.setAttribute("type", "number")

        occupation.setAttribute('id', 'occupation-1')
        occupation.setAttribute("placeholder", "Occupation")
        occupation.setAttribute("class", "class-one")
        occupation.setAttribute("type", "text")

        nacionality.setAttribute('id', 'nacinality-1')
        nacionality.setAttribute('type', 'text')
        nacionality.setAttribute('placeholder', 'Nacionality')
        nacionality.setAttribute('class', 'class-one')

        labelSexo.setAttribute('id', 'labelSexo-1')
        labelSexo.innerText = 'Sexo:'

        labelMasc.setAttribute('for', 'radioMasc-1')
        labelMasc.innerText = 'Masculino'
        radioMasc.setAttribute('id', 'radioMasc-1')
        radioMasc.setAttribute('type', 'radio')
        radioMasc.setAttribute('name', 'sexo')

        labelFem.setAttribute('for', 'radioFem-1')
        labelFem.innerText = 'Feminino'
        radioFem.setAttribute('id', 'radioFem-1')
        radioFem.setAttribute('type', 'radio')
        radioFem.setAttribute('name', 'sexo')

        labelDate.setAttribute('for', 'datanasc')
        labelDate.innerText = 'Birth Date'
        inputDate.setAttribute('id', 'datanasc')
        inputDate.setAttribute('class', 'class-one')
        inputDate.setAttribute('type', 'datetime-local')


        rg.setAttribute('id', 'rg-1')
        rg.setAttribute('type', 'number')
        rg.setAttribute('class', 'class-one')
        rg.setAttribute('placeholder', 'Number ID')

        expedidor.setAttribute('id', 'expedidor-1')
        expedidor.setAttribute('type', 'number')
        expedidor.setAttribute('class', 'class-one')
        expedidor.setAttribute('placeholder', 'Consignor')

        cpf.setAttribute('id', 'cpf-1')
        cpf.setAttribute('type', 'number')
        cpf.setAttribute('class', 'class-one')
        cpf.setAttribute('placeholder', 'CPF')

        passport.setAttribute('id', 'passaport-1')
        passport.setAttribute('type', 'number')
        passport.setAttribute('class', 'class-one')
        passport.setAttribute('placeholder', 'Passaport Number')

        address.setAttribute('id', 'address-1')
        address.setAttribute('type', 'text')
        address.setAttribute('class', 'class-one')
        address.setAttribute('placeholder', 'Permanent Address')

        city.setAttribute('id', 'city-1')
        city.setAttribute('type', 'text')
        city.setAttribute('class', 'class-one')
        city.setAttribute('placeholder', 'City')

        state.setAttribute('id', 'state-1')
        state.innerText = 'State:'
        selectState.setAttribute('id', 'selectState-1')
        optState1.setAttribute('value', '')
        optState1.innerText = 'Select...'


        country.setAttribute('id', 'pais-1')
        country.innerText = 'Country:'
        selectCountry.setAttribute('id', 'selectPais-1')
        optCountry1.setAttribute('value', '')
        optCountry1.innerText = 'Select...'

        arriving.setAttribute('id', 'arriving-1')
        arriving.setAttribute('type', 'text')
        arriving.setAttribute('class', 'class-one')
        arriving.setAttribute('placeholder', 'Arriving From')

        destination.setAttribute('id', 'destination-1')
        destination.setAttribute('type', 'text')
        destination.setAttribute('class', 'class-one')
        destination.setAttribute('placeholder', 'Next Destination')

        entry.setAttribute('id', 'entry-1')
        entry.setAttribute('type', 'datetime-local')
        entry.setAttribute('placeholder', 'Date Check-in')
        
        exit.setAttribute('id', 'exit-1')
        exit.setAttribute('type', 'datetime-local')
        exit.setAttribute('placeholder', 'Date Check-out')
        
        buttonNext1.setAttribute('id', 'bt-2')
        buttonNext1.innerText = 'Next'
        buttonNext1.setAttribute('onclick', 'gerenciar.checkinInsert2()')

    }

    checkinInsert2() {

        document.querySelector('div#model-1').remove()
        document.querySelector('div#model-2').remove()
        document.querySelector('div#model-3').remove()
        document.querySelector('div#model-4').remove()
        document.querySelector('div#model-5').remove()
        document.querySelector('button#bt-2').remove()
        

        let card = document.querySelector('div#main2')
        let divSection = document.createElement('div')
        let divfieldset1 = document.createElement('div')
        

        let ttl2 = document.createElement('h2')
        let checkbox1 = document.createElement('input')
        let checklabel1 = document.createElement('label')
        let checkbox2 = document.createElement('input')
        let checklabel2 = document.createElement('label')
        let checkbox3 = document.createElement('input')
        let checklabel3 = document.createElement('label')
        let checkbox4 = document.createElement('input')
        let checklabel4 = document.createElement('label')
        let checkbox5 = document.createElement('input')
        let checklabel5 = document.createElement('label')
        let checkbox6 = document.createElement('input')
        let checklabel6 = document.createElement('label')
        let numberGuests = document.createElement('input')
        let fieldset1 = document.createElement('fieldset')
        let legend1 = document.createElement('legend')
        let buttonNext2 = document.createElement('button')

        card.appendChild(ttl2)

        fieldset1.appendChild(legend1)
        
        fieldset1.appendChild(checkbox1)
        fieldset1.appendChild(checklabel1)
        
        fieldset1.appendChild(checkbox2)
        fieldset1.appendChild(checklabel2)
        
        fieldset1.appendChild(checkbox3)
        fieldset1.appendChild(checklabel3)
        
        fieldset1.appendChild(checkbox4)
        fieldset1.appendChild(checklabel4)
        
        fieldset1.appendChild(checkbox5)
        fieldset1.appendChild(checklabel5)

        fieldset1.appendChild(checkbox6)
        fieldset1.appendChild(checklabel6)
        
        divfieldset1.appendChild(fieldset1)
        divSection.appendChild(divfieldset1)
        
        divSection.appendChild(numberGuests)

        divSection.appendChild(buttonNext2)



        card.appendChild(divSection)

        divSection.setAttribute('id', 'divSection-1')
        divfieldset1.setAttribute('class', 'field1')

        ttl2.setAttribute('id', 'ttl-2')
        ttl2.innerText = 'Bedroom'

        legend1.innerText = 'Select a room'
        
        checkbox1.setAttribute('id', 'checkbox-1')
        checkbox1.setAttribute('type', 'checkbox')
        checklabel1.setAttribute('id', 'checklabel-1')
        checklabel1.innerText = 'Dorm Men'

        
        checkbox2.setAttribute('id', 'checkbox-2')
        checkbox2.setAttribute('type', 'checkbox')
        checklabel2.setAttribute('id', 'checklabel-2')
        checklabel2.innerText = 'Dormitory Women'

        checkbox3.setAttribute('id', 'checkbox-3')
        checkbox3.setAttribute('type', 'checkbox')
        checklabel3.setAttribute('id', 'checklabel-3')
        checklabel3.innerText = 'Double'
        
        checkbox4.setAttribute('id', 'checkbox-4')
        checkbox4.setAttribute('type', 'checkbox')
        checklabel4.setAttribute('id', 'checklabel-4')
        checklabel4.innerText = 'Triple'

        checkbox5.setAttribute('id', 'checkbox-5')
        checkbox5.setAttribute('type', 'checkbox')
        checklabel5.setAttribute('id', 'checklabel-5')
        checklabel5.innerText = 'Quadruple'

        checkbox6.setAttribute('id', 'checkbox-6')
        checkbox6.setAttribute('type', 'checkbox')
        checklabel6.setAttribute('id', 'checklabel-6')
        checklabel6.innerText = 'Breakfast'

        numberGuests.setAttribute('id', 'numberGuests-1')
        numberGuests.setAttribute('type', 'number')
        numberGuests.setAttribute('placeholder', 'Number Guests')

        buttonNext2.setAttribute('id', 'btn-2')
        buttonNext2.setAttribute('type', 'button')
        buttonNext2.setAttribute('onclick', 'gerenciar.checkinInsert3()')
        buttonNext2.innerText = 'Next'


    }
checkinInsert3() {

    document.querySelector('div#divSection-1').remove()

    let card = document.querySelector('div#main2')

    let divSection3 = document.createElement('div')

    let ttl3 = document.querySelector('h2#ttl-2')
    ttl3.innerText = 'Arriving By'

    let divfieldset1 = document.createElement('div')
    
    let checkbox1 = document.createElement('input')
    let checklabel1 = document.createElement('label')
    let checkbox2 = document.createElement('input')
    let checklabel2 = document.createElement('label')
    let checkbox3 = document.createElement('input')
    let checklabel3 = document.createElement('label')
    let checkbox4 = document.createElement('input')
    let checklabel4 = document.createElement('label')
    let buttonNext3 = document.createElement('button')
    let plateCar = document.createElement('input')
    let fieldset2 = document.createElement('fieldset')
    let legend2 = document.createElement('legend')

    fieldset2.appendChild(legend2)
    
    fieldset2.appendChild(checkbox1)
    fieldset2.appendChild(checklabel1)

    fieldset2.appendChild(checkbox2)
    fieldset2.appendChild(checklabel2)

    fieldset2.appendChild(checkbox3)
    fieldset2.appendChild(checklabel3)

    fieldset2.appendChild(checkbox4)
    fieldset2.appendChild(checklabel4)

    divfieldset1.appendChild(fieldset2)
    divSection3.appendChild(divfieldset1)

    divSection3.appendChild(plateCar)

    divSection3.appendChild(buttonNext3)

    card.appendChild(divSection3)


    legend2.innerText = 'Select a transport'
    
    divSection3.setAttribute('id', 'divSection-1')

    divfieldset1.setAttribute('class', 'field1')
     
    checkbox1.setAttribute('id', 'checkbox-1')
    checkbox1.setAttribute('type', 'checkbox')
    checklabel1.setAttribute('id', 'checklabel-1')
    checklabel1.innerText = 'Car'

    
    checkbox2.setAttribute('id', 'checkbox-2')
    checkbox2.setAttribute('type', 'checkbox')
    checklabel2.setAttribute('id', 'checklabel-2')
    checklabel2.innerText = 'Bus'

    checkbox3.setAttribute('id', 'checkbox-3')
    checkbox3.setAttribute('type', 'checkbox')
    checklabel3.setAttribute('id', 'checklabel-3')
    checklabel3.innerText = 'Motocycle'
    
    checkbox4.setAttribute('id', 'checkbox-4')
    checkbox4.setAttribute('type', 'checkbox')
    checklabel4.setAttribute('id', 'checklabel-4')
    checklabel4.innerText = 'Other'

    plateCar.setAttribute('id', 'plateCar-1')
    plateCar.setAttribute('type', 'text')
    plateCar.setAttribute('placeholder', 'Plate Car')

    buttonNext3.setAttribute('id', 'btn-2')
    buttonNext3.setAttribute('type', 'button')
    buttonNext3.setAttribute('onclick', 'gerenciar.checkinInsert3()')
    buttonNext3.innerText = 'Next'



    

}

}

let gerenciar = new Gerenciar()