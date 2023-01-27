// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

function calcularAreaPerimetro(base , altura) {
let perimetro = (2 * base) + (2 * altura);
let area = base * altura ;
resultado.area = area
resultado.perimetro = perimetro
return console.log (resultado)
};
(calcularAreaPerimetro(2,2))