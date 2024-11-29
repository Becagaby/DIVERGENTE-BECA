let musica;

function preload(){
  musica = loadSound("fundo.mp3");
}

function setup(){
  musica.play();
  musica.loop();
}

const avança = documento. querySelectorAll(".proximo");
avanço.forEach(button =>{ 
               button. addEventListener('click', function(){
  const atualn= document.querySelector('.ativo');
  const proximoPasso = 'passo-' + this.getAttribute ('data-proximo');
  atual.classList.remove('ativo');
  document.getElementById(proximoPsso).classList.add('ativo');
  })
})