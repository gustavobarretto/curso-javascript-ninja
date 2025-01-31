/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
let sum = function calculateSum(x, y) {
    return x + y;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log('A soma de ' + 2 + ' e ' + 5 + ' é igual a ' + sum(2, 5) + '.')

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é ' + sum.name + '.');

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName () {
    return 'Gustavo'
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
let varShowName = showName;
console.log(varShowName);

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.');

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

function calculator(param) {
    
    switch (param) {
        case '+':
            function sum (x, y) {
                let result = x + y;
                return 'Resultado da operação: ' + x + ' ' + param + ' ' + y + ' = ' + result + '.';
            }
            return sum;
        case '-':
            function sub (x, y) {
                let result = x - y;
                return 'Resultado da operação: ' + x + ' ' + param + ' ' + y + ' = ' + result + '.';
            }
            return sub;
        case '*':
            function multiplication (x, y) {
                let result = x * y;
                return 'Resultado da operação: ' + x + ' ' + param + ' ' + y + ' = ' + result + '.';
            }
            return multiplication;
        case '/':
            function divisor (x, y) {
                let result = x / y;
                return 'Resultado da operação: ' + x + ' ' + param + ' ' + y + ' = ' + result + '.';
            }
            return divisor;
        case '%':
            function rest (x, y) {
                let result = x % y;
                return 'Resultado da operação: ' + x + ' ' + param + ' ' + y + ' = ' + result + '.';
            }
            return rest;
        default:
            return 'Operação inválida.' 
    }
}

// DACIUK VERSION
function calculator2(operator) {
    return function (number1, number2) {
        var result;
        switch(operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            case '%':
                result = number1 % number2;
                break;
        }
        return 'Resultado da operação: ' + number1 + ' ' + operator + ' ' + number2 + ' = ' + result + '.'
    }

}



/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
sum = calculator('+');


/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(10, 2));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
subtraction = calculator('-');
multiplication = calculator('*');
division = calculator('/');
mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(sum(10, 5))
console.log(subtraction(10, 3))
console.log(multiplication(10, 7))
console.log(division(10, 3))
console.log(mod(10, 3))