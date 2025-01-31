(function () {
    'use strict';

    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */
    
    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    
    */
    let text = `Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 
                – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi
                 um militar, político, abolicionista e monarquista brasileiro.`

    
    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    console.log(text.replace(/(Manuel Marques de Sousa)/, 'Gustavo Teles Barretto'));


    
    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
   console.log(text.replace(/(brasileiro)/, 'soterapolitano'));


    
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log( '\nTrocando números por -:' );
    console.log(text.replace(/\d/g, '-'));

    
    
    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    
    console.log(text.replace(/[Dh]/g, '0'))
    
    

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    
    console.log(text.replace(/[Aa]/g, '4'))

    
    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    
    text = text.replace(/O Centauro de Luvas/g, function (totalString) {
        return totalString.toLocaleUpperCase();
    });

    console.log(text);
    
    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log( '\nMeses representados por números:' );
    
    function getMonthNumber (month) {
        switch(month.toLocaleLowerCase()) {
            case ' de janeiro de ':
                return '01';
            case ' de fevereiro de ':
                return '02';
            case ' de março de ':
                return '03';
            case ' de abril de ':
                return '04';
            case ' de maio de ':
                return '05';
            case ' de junho de ':
                return '06';
            case ' de julho de ':
                return '07';
            case ' de agosto de ':
                return '08';
            case ' de setembro de ':
                return '09';
            case ' de outubro de ':
                return '10';
            case ' de novembro de ':
                return '11';
            case ' de dezembro de ':
                return '12';
            default:
                month + 'está escrito de forma incorreta incorreto ou não correspondente ao calendário romano.'
        }
    }

    function getMonthMessage(month) {
        return 'O mês de ' + month.toLocaleLowerCase() + ' é representado pelo número ' + getMonthNumber(month) + '.';

    }

    console.log(getMonthMessage('março'))
    console.log(getMonthMessage('setembro'))
    console.log(getMonthMessage('dezembro'))

    
    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );
    
    let regexDate =  /( de janeiro de | de fevereiro de | de março de | de abril de | de maio de | de junho de | de julho de | de agosto de | de setembro de | de outubro de | de novembro de | de dezembro de )/gi

    
    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );
    
    function replaceDate () {
        let newText = text.replace(regexDate, function (totalString, word) {
            console.log(word)
            return '/' + getMonthNumber(word) + '/';
        });
        return newText;
    }

    console.log(replaceDate())

})();
