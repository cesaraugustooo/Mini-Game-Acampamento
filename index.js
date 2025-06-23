//Get x,y
let obj = document.getElementById('obj');
let cord = obj.getBoundingClientRect()
let x = cord.left






//Open modal function
function modal(){
    document.getElementById('modal').classList.add('animation-modal');
    setTimeout(() => {
        document.getElementById('modal').classList.remove('animation-modal');
        document.getElementById('modal').style.display = 'none';
    }, 1500);
    setTimeout(()=>{
        document.body.style.zoom = "150%"; 
        window.scrollBy(0,480); 
    },1000)
}