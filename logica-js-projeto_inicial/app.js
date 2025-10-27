alert("Iniciar jogo");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let palpite;
let tentativas = 1;

while (palpite != numeroSecreto) {
    palpite = prompt(`insira um numero de 1 a ${numeroMaximo}`);

    if (numeroSecreto == palpite) {
        break;

    } else {
        if (palpite > numeroSecreto) {
            alert(`o numero secreto é menor que ${palpite}`);
        } else {
            alert(`o numero secreto é maior que ${palpite}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas " : "tentativa";
alert(`você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
