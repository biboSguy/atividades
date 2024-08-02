1-
let cidade = "São Paulo";

let estado = "São Paulo";

let localizacao = cidade + ", " + estado;

console.log("Localização concatenada:", localizacao);

let localizacaoMinuscula = localizacao.toLowerCase();

console.log("Localização em minúsculas:", localizacaoMinuscula);

2-
let altura = 5;
let largura = 15;

let area = altura * largura;

let perimetro = 2 * (altura + largura);


let multiplicacao = altura * largura;

let divisao = largura / altura;

console.log("Área:", area);
console.log("Perímetro:", perimetro);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

let restoDivisao = largura % altura;

console.log("Resto da divisão de largura por altura:", restoDivisao);

let hipotenusa = Math.sqrt(altura ** 2 + largura ** 2);

console.log("Hipotenusa:", hipotenusa);



3-let estaFrio = true;

if (estaFrio) {
    console.log("Está frio!");
} else {
    console.log("Não está frio.");
}

estaFrio = !estaFrio;
console.log("Novo valor de estaFrio:", estaFrio);

let estaQuente = false;

let resultadoAnd = estaFrio && estaQuente;
console.log("Resultado de estaFrio && estaQuente:", resultadoAnd);

let resultadoOr = estaFrio || estaQuente;
console.log("Resultado de estaFrio || estaQuente:", resultadoOr);


4- let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
};

livro.editora = "HarperCollins";

console.log("Propriedades do objeto livro:", livro);



5-
const dataAtual = new Date();
const dataNascimento = new Date('1990-08-15');

function calcularDiferencaEmAnos(dataNascimento, dataAtual) {
    let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = dataNascimento.getMonth();
    
    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && dataAtual.getDate() < dataNascimento.getDate())) {
        anos--;
    }

    return anos;
}

const diferencaEmAnos = calcularDiferencaEmAnos(dataNascimento, dataAtual);
console.log(`A diferença em anos é: ${diferencaEmAnos}`);



6-
function calculaArea(largura, altura) {
    return largura * altura;
}

console.log(calculaArea(5, 10));

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('SeuNome');



7-
const aluno = {
nome: 'João',
idade: 21,
curso: 'Engenharia',
   
apresentacao: function() {
console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}.`);
    }
  };
 aluno.apresentacao();
 
8-
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(num => num * 2);

const maioresQue2 = numeros.filter(num => num > 2);

console.log('Valores dobrados:', dobrados);
console.log('Valores maiores que 2:', maioresQue2);