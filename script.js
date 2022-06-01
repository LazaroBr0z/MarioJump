//referencia a class mario e pipe
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
//funcao pula
const jump = () =>{
    //quando chamada adiciona a class que tem a animacao
    mario.classList.add('jump');
    //para n ficar pulando pra sempre, assim que acaba a animação ela para com a remocao da class
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 800)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft; //pega o valor do atributo left (distancia da margem esquerda)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //pega altura e converte em numero
    if(pipePosition <=215 && pipePosition> 0 && marioPosition < 100){ //se o cano ta perto e o mario n pulou
        pipe.style.animation = 'none'; //para quando bate
        pipe.style.left = `${pipePosition}px`; //para na posicao que bate

        mario.style.animation = 'none'; //para a animacao
        mario.style.bottom = `${marioPosition}px`; //para o mario onde caiu

        mario.src= 'game-over.png'; //altera imagem para o mario que perdeu
        mario.style.width = '95px'; //altera tamanho da imagem
        mario.style.marginLeft = '90px'; //deixa o mario mais prox ao cano
        mario.style.bottom = '30px'; //deixa o mario mais descolado do chao

        clearInterval(loop);
    }
}, 10)

//comando que escuta o teclado e executa acao
document.addEventListener('keydown', jump);


