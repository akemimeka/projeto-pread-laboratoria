let nomeDeUsuario = prompt("Olá! Insira seu nome:");
let mostrarNome = document.getElementById("nome");

mostrarNome.innerHTML = `${nomeDeUsuario}`;

let participacao = prompt (`Você quer iniciar o teste? \n
1. Sim \n
2. Não`);

if (participacao === "1") {
  let resultadoCorretoUm = document.getElementById ("resposta-correta-1");
  let resultadoErradoUm = document.getElementById ("resposta-errada-1");
  let resultadoCorretoDois = document.getElementById ("resposta-correta-2");
  let resultadoErradoDois = document.getElementById ("resposta-errada-2");
  let resultadoCorretoTres = document.getElementById ("resposta-correta-3");
  let resultadoErradoTres = document.getElementById ("resposta-errada-3");

  let perguntaUm = prompt(`Qual é a capital da Austrália? Responda 1, 2 ou 3: \n
  1. Canberra \n
  2. Sidney \n
  3. Ottawa`);
  
  if (perguntaUm === '1') {
    resultadoCorretoUm.innerHTML = 'resposta 1'
  } else {
    resultadoErradoUm.innerHTML = 'resposta 1'
  }

  let perguntaDois = prompt(`Qual é a capital do Timor Leste? Responda 1, 2 ou 3: \n
  1. Tóquio \n
  2. Port Moresby \n
  3. Dily`);

  if (perguntaDois ==='3') {
    resultadoCorretoDois.innerHTML = 'resposta 2'
  } else {
    resultadoErradoDois.innerHTML = 'resposta 2'
  }

  let perguntaTres = prompt (`Qual a capital da Alemanha? Responda 1, 2 ou 3: \n
  1. Munique \n
  2. Berlim \n
  3. Amsterdã`);

  if (perguntaTres === '2') {
    resultadoCorretoTres.innerHTML = 'resposta 3'
  } else {
    resultadoErradoTres.innerHTML = 'resposta 3'
  }

} else {
  alert(`Que pena! 😭`);
}



