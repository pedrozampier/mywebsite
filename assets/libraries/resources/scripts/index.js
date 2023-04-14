const btnSortear = document.getElementById('btnSortear');
const resultado = document.getElementById('resultado');
const tempoRestante = document.getElementById('tempoRestante');
//const campoNumero = document.getElementById("numero");

let podeClicar = true;

const campoNumero = document.getElementById("numero");

const numero = campoNumero.value;
console.log(numero)

btnSortear.addEventListener('click', function() {
  if (podeClicar) {
    const numeroSorteado = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
    resultado.textContent = `Número sorteado: ${numeroSorteado}`;
    podeClicar = false;
    btnSortear.disabled = true;
    alert("O número que você inseriu é: " + numero);

    let segundosRestantes = 5;
    const intervalo = setInterval(function() {
      segundosRestantes--;
      tempoRestante.textContent = `Espere ${segundosRestantes} segundos`;

      if (segundosRestantes === 0) {
        clearInterval(intervalo);
        tempoRestante.textContent = '';
        podeClicar = true;
        btnSortear.disabled = false;
      }
    }, 1000); // Chama a função a cada 1 segundo (1000 milissegundos)
  }
});
