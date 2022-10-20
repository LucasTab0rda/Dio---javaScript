// 1- Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustivél por kilômetro rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm;
}

function valorParaPercurso (gastoMedioPorKm,precoCombustivel){
    let resultado = gastoMedioPorKm * precoCombustivel; 
    return console.log(`O valor gasto para o percurso é de  ${resultado}`)
}

let precoCombustivel = 5

sandero = new Carro();
    sandero.marca = 'renault';
    sandero.cor = 'preto';
    sandero.gastoMedioPorKm = 0.50


valorParaPercurso (sandero.gastoMedioPorKm, precoCombustivel)