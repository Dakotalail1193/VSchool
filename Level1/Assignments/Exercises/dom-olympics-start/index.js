var header = document.querySelector("#header")
header.textContent = "Javascript Dom Olympics"
document.body.prepend(header)
header.style.textAlign = "center"
header.style.fontStyle = "italic"
header.style.fontSize = "50px"

var intro = document.querySelector("#header")
intro.innerHTML += "<h2>This was made in Javascript By </h2>"
document.querySelector("h2").style.fontSize = "20px"

var myName = document.querySelector("h2")
myName.innerHTML += "<span>Dakota</span>"
document.querySelector("span").style.color = "blue"
document.querySelector("span").style.backgroundColor = "grey"


var erase = document.getElementById("clear-button")
erase.addEventListener("click", function(){
 document.querySelector(".messages").textContent = " "
 console.log("cleared")
});

document.querySelector("#one").textContent = "Hey how are you?"

document.querySelector("#two").textContent = "I am good! How about you?"

document.querySelector("#three").textContent = "I am great! Just starting my VSchool!"

document.querySelector("#four").textContent = "That is awesome! I am excited to hear!"

//var theme = document.querySelector("theme-drop-down")
//var themeOne = document.querySelector("theme-one")
//var themeTwo = document.querySelector("theme-two")

//document.getElementById("theme-drop-down").addEventListener("select", function(){
//if (value === themeOne){
//    document.querySelector(".left").style.color = "burlywood",
//    document.querySelector(".right").style.color = "lightblue",
//    console.log("theme one");
//} else if (value === themeTwo) {
//    document.querySelector(".left").style.color = "black",
//    document.querySelector(".right").style.color = "red",
//    console.log("theme two");
//}})