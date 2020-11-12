let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho no canvas
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //posição x e y, altura e largura
}

criarBG();