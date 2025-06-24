let obj;
let xc = 0;
var virado = false;

const agora = new Date();
const horas = agora.getHours().toString().padStart(2, '0');
const minutos = agora.getMinutes().toString().padStart(2, '0');

document.getElementById('time').innerHTML += `${horas}:${minutos}`


let leftGreen = 0;
let rightGreen = 0;


function modal() {
    document.getElementById('modal').classList.add('animation-modal');
    setTimeout(() => {
        document.getElementById('modal').classList.remove('animation-modal');
        document.getElementById('modal').style.display = 'none';
    }, 1000);
    setTimeout(() => {
        document.body.style.zoom = "150%";
        window.scrollBy(0, 480);
        setTimeout(() => {
            obj = document.getElementById('obj');
            obj.style.display = 'flex';
            obj.classList.add('descer');
            setTimeout(() => {
                obj.classList.remove('descer');
            }, 1000);
            let cord = obj.getBoundingClientRect();
            xc = cord.left;
            obj.style.left = `${xc}px`;
        }, 2000);
    }, 1000);
}

document.addEventListener('keypress', function (event) {

    if (event.key === 'd') {
        if (virado === true) {
            obj.classList.remove('esquerda');
            obj.classList.add('direita');
            virado = false;
        }
        xc += 5;
        obj.classList.add('andar');
        obj.style.left = `${xc}px`;
        window.scrollBy(5, 0);
        setTimeout(() => {
            obj.classList.remove('andar');
        }, 1000);
    } else if (event.key === 'a') {
        if (virado === false) {
            obj.classList.remove('direita');
            obj.classList.add('esquerda');
            virado = true;
        }
        xc -= 5;
        obj.classList.add('andar');
        obj.style.left = `${xc}px`;
        window.scrollBy(-5, 0);
        setTimeout(() => {
            obj.classList.remove('andar');
        }, 1000);
    }
});
function fo_modal(){
    document.getElementById('fo-modal').style.display = 'flex';
}
function modal2() {
    document.getElementById('modal2').style.display = 'flex';
    document.getElementById('modal2').classList.add('descer2')
    document.getElementById('white-bar').classList.add('spin')

    let green = document.getElementById('green-bar');

    let positionGren = green.getBoundingClientRect();


    console.log(positionGren.left, positionGren.right);

    leftGreen = positionGren.left;
    rightGreen = positionGren.right;


}

function modal2F() {
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal2').classList.add('animation-modal')


}

document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let bar = document.getElementById('white-bar');
        let barPosi = bar.getBoundingClientRect();
        let leftbar = barPosi.left;
        let rightbar = barPosi.right;
        console.log(leftbar, rightbar)
        if (leftGreen <= leftbar && rightbar <= rightGreen) {
            console.log('a')
            document.getElementById('doce').style.filter = ' brightness(1) saturate(1)'
        }

        document.getElementById('white-bar').classList.remove('spin')
    }
})

function me_modal() {
    if (document.getElementById('me-modal').style.display == 'flex') {
        document.getElementById('me-modal').style.display = 'none';
    } else {
        document.getElementById('me-modal').style.display = 'flex';
    }
}


let cards = document.querySelectorAll('.row-div');
let tentativas = 0;
let valores = [];
let elemetosVirados = [];
let points = 0;

cards.forEach(elemet => {
    elemet.addEventListener('click', () => {
        elemet.classList.add('click')
        elemetosVirados.push(elemet);
       
        if (tentativas < 2) {
            tentativas += 1;
            valores.push(elemet.dataset.valor)
        }
        if(tentativas == 2){
            tentativas = 0;
            if(valores[0] == valores[1]){
                points += 1
                if(points == 3){
                    setTimeout(()=>{
                        document.getElementById('me-modal').classList.add('animation-modal')
                        setTimeout(() => {
                            document.getElementById('me-modal').style.display = 'none'
                        }, 1000);
                    },500)
                }
                valores.splice(0,2)
            }else if(valores[0] != valores[1]){
                valores.splice(0,2)
                elemetosVirados.forEach(element => {
                    setTimeout(() => {
                        element.classList.remove('click')
                        element.classList.add('click2')
                    }, 1000);
                });
            }
            elemetosVirados.splice(0,2);

        }
    })
})

function fechar(event){
    event.preventDefault()
    document.getElementById('fo-modal').style.display = 'none';

}

const btn = document.getElementById('fullscreen-btn');
const icon = document.getElementById('fullscreen-icon');

function Fullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    icon.src = 'assets/Images/lesscreen-mark.png'; 
  } else {
    document.exitFullscreen();
    icon.src = 'assets/Images/fullscreen-mark.png'; 
  }
}

btn.addEventListener('click',Fullscreen);