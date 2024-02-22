var boxColor = document.getElementById("box")

//boxColor.addEventListener('click', function(){
//    document.boxColor.style.color = "blue"
//})

document.getElementById("box").addEventListener('mouseover', function(){
    boxColor.style.backgroundColor = "blue";
    
})
document.getElementById("box").addEventListener('mouseout', function(){
    boxColor.style.backgroundColor = "white";
    
})
document.getElementById("box").addEventListener('mousedown', function(){
    boxColor.style.backgroundColor = "red";
    
})
document.getElementById("box").addEventListener('mouseup', function(){
    boxColor.style.backgroundColor = "yellow";
    
})
document.getElementById("box").addEventListener('dblclick', function(){
    boxColor.style.backgroundColor = "green";
    
})
document.getElementById("box").addEventListener('wheel', function(){
    boxColor.style.backgroundColor = "orange";
    
})

document.addEventListener('keydown', function(e){
    console.log(e)
    if (e.keyCode === 66) {
        boxColor.style.backgroundColor = "blue";
    }
    else if (e.keyCode === 82) {
        boxColor.style.backgroundColor = "red";
}
    else if (e.keyCode === 89) {
    boxColor.style.backgroundColor = "yellow";
}
    else if (e.keyCode === 79) {
    boxColor.style.backgroundColor = "orange";
}
    else if (e.keyCode === 71) {
    boxColor.style.backgroundColor = "green";
}
});


