//funcion original

function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    } 
ele = document.getElementById("ele1")    
ele.addEventListener("click", pintar);


//ejercicio 3.1

function pintar(ele){
    //ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", function() {
    
    pintar(ele)
});

//ejercicio 3.2

function pintar(ele, color='green'){
    //ele = document.getElementById("ele1")
    ele.style.backgroundColor = color
}
ele = document.getElementById("ele1")
ele.addEventListener("click", function() {
    
    pintar(ele)
});
