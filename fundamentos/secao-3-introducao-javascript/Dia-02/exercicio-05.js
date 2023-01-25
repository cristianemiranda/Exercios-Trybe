let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele

//for (let index = 0; index < numbers.length; index += 1) {
//console.log(numbers[index]);
//}
//Some todos os valores contidos no array e imprima o resultado

//let result = 0;

//for (let index = 0; index < numbers.length; index += 1) {
  //  result += numbers[index];
//}
//console.log(result);

//Calcule e imprima a média aritmética dos valores contidos no array

//let sum = 0;

//for (let index = 0; index < numbers.length; index += 1){
    //sum += numbers[index];
//}

//let average = sum / numbers.length;

//console.log(average);

//Com base no código que acabou de gerar, faça com que, caso o valor final
// seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, 
//imprima a mensagem: “valor menor ou igual a 20”;

let result = 0;

for (let index = 0; index < numbers.length; index +=1){
    result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
    console.log('Valor MAIOR de 20');
} else {
    console.log('Valor MENOR ou IGUAL a 20');
}