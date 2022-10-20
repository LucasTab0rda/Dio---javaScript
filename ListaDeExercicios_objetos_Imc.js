// Crie uma classe para representar pessoas.
// para cada pessoa teremos os atributos Nome, peso  e altura
// As pesoas devem ter capacidade de dizer o valor do seu IMC ( IMC = peso / (altura* altura));
// Instancie uma pessoa chamada josé que tenha 70kg e 1,75 de altura e peça ao josé para dizer o valor do seu IMC.

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura )
    }
}

const jose = new Pessoa ( 'jose', 75, 1.75)

console.log(jose.calcularImc());