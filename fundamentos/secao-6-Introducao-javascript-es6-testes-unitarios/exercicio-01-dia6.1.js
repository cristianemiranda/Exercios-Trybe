// // Para saber se a função está executando corretamente,
//  é preciso testá-la. Para isso, execute o código abaixo:

// const sum = (value1, value2) => {
//         return value1 + value2;
// };
  
//   console.log(sum(2, 3)); //resultado:5

// //   Para ver o que pode acontecer ao tentar somar o número 2
// //  com a string 3, execute o código abaixo e veja o que ele te retorna:
// const sum = (value1, value2) => {
//     return value1 + value2;
// };
  
//   console.log(sum(2, '3')); // resultado: 23

// //   No caso da função que você criou para realizar a soma dos números, 
// //   é possível adicionar uma condicional para verificar o tipo do dado passado como parâmetro. 
// //   Analise e execute o código abaixo:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3')); //resultado: Os valores devem ser numéricos

// //   Para tratar erros em um código JavaScript, precisamos do fluxo 
// //   de exceção. Para isso, podemos interromper o funcionamento do 
// //   código e lançar um erro por meio do throw new Error, que cria e 
// //   lança um objeto de erro. Veja o exemplo abaixo:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3')); //Ao utilizar o throw new Error(), a execução da função sum é interrompida e temos uma mensagem de erro no console, 
//                              //bem como uma indicação da linha onde esse erro ocorre.

//  // Como a função sum se torna extensa e é responsável por muitas 
// // funcionalidades, o ideal é refatorar o código e criar uma função
// // separada para verificar se os valores são números, 
// // para depois chamá-la dentro do bloco try, como no exemplo abaixo:

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
//     }
//   };
  
//   const sum = (value1, value2) => {
//     // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
//     try { 
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
//     } catch (error) {
//       return error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));