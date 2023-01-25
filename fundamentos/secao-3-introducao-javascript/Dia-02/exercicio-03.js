const desafio = 85;
if (desafio >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas");
} else if (desafio < 80 && desafio >= 60) {
    console.log("Você está na lista de espera.");
}else if (desafio < 60) {
    console.log("Infelizmente, você reprovou.");
}
