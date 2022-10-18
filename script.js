function IdadePetConversão (idade, nome , especie ) {
    
    if(idade <= 0 && nome == " " && especie == ""){
        document.getElementById('resposta_1').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`  
    } else{
        document.getElementById('resposta_1').innerHTML = `<p>${nome} tem ${idade * 7} anos em anos humanos de verdade! Um ${especie} tem uma relação de 7 anos de ${especie} para cada 1 ano humano</p>`
    }
}

function MeuLanche (idade, quant_de_lanches_por_dia ) {
    var idade_2 = idade
    var quantidade_de_lanches_por_dia = quant_de_lanches_por_dia
    const idade_max = 90

    if(quantidade_de_lanches_por_dia == ""){
        document.getElementById('resposta_2').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`
    }else{
        document.getElementById('resposta_2').innerHTML = `<p> Você precisará de ${(idade_max - idade_2) * quantidade_de_lanches_por_dia * 365 } para durar até a idade 90 ano</p>`
    }
}

function calcularCircunferencia(raio){

    if(raio < 0){
        document.getElementById('resposta_3').innerHTML = `<p class='erro'> ERRO! Valor do R invalido. </p>`  
    } else{
        document.getElementById('resposta_3').innerHTML = `<p>A Circunferencia é de  ${2 * 3.14 * raio }</p>`
    }

}

function calcularArea(altura , base ){
    if(altura < 0 && base < 0){
        document.getElementById('resposta_4').innerHTML = `<p class='erro'> ERRO! Valores invalido. </p>`  
    } else{
        document.getElementById('resposta_4').innerHTML = `<p>A área é ${2 *(base + altura) }</p>`
    }

}

function converterCelsiusFahrenheit(Celsius){
    if(Celsius < ''){
        document.getElementById('resposta_5').innerHTML = `<p class='erro'> ERRO! Valor invalido. </p>`  
    } else{
        document.getElementById('resposta_5').innerHTML = `<p>${Celsius}° C é igual a ${Celsius * 1.8 + 32} ° F. </p>`
    }
}

function converterFahrenheitCelsius(Fahrenheit){
    if(Fahrenheit < ''){
        document.getElementById('resposta_6').innerHTML = `<p class='erro'> ERRO! Valor invalido. </p>`  
    } else{
        document.getElementById('resposta_6').innerHTML = `<p>${Fahrenheit}° F é igual a ${(Fahrenheit - 32) /1.8} ° C. </p>`
    }
}