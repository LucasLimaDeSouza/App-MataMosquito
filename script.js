let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criandoMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "facil") {
  criandoMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  criandoMosquitoTempo = 1000;
} else if (nivel === "superHard") {
  criandoMosquitoTempo = 750;
}

function responderDimensoes() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

responderDimensoes();

let cronometro = setInterval(function () {
  tempo--;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosquito);
    window.location.href = "./vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "./gameOver.html";
    } else {
      document.getElementById("v" + vidas).src = "/imagens/coracao_vazio.png";

      vidas++;
    }
  }

  let posiçaoY = Math.floor(Math.random() * altura) - 90;
  let posiçaoX = Math.floor(Math.random() * largura) - 90;

  posiçaoY = posiçaoY < 0 ? 0 : posiçaoY;
  posiçaoX = posiçaoX < 0 ? 0 : posiçaoX;

  console.log(posiçaoY, posiçaoX);

  let mosquito = document.createElement("img");
  mosquito.src = "./imagens/mosquito.png";

  mosquito.className = tamanhosAleatorios() + " " + ladoAleatorio();

  mosquito.style.left = posiçaoX + "px";
  mosquito.style.top = posiçaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhosAleatorios() {
  let classes = Math.floor(Math.random() * 3);

  switch (classes) {
    case 0:
      return "mosquitoUm";
    case 1:
      return "mosquitoDois";
    case 2:
      return "mosquitoTres";
  }
}

function ladoAleatorio() {
  let lado = Math.floor(Math.random() * 2);

  switch (lado) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
