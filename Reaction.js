var second = Date.now();
var color = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "gray"];

function React(){
    var currColor = color[Math.floor(Math.random()*10)]
    document.getElementById("shapes").style.backgroundColor=currColor;
    alert(Date.now()-second)
}