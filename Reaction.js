window.onload = appear();
var clicked;
var startTime = Date.now();

function disappear(){
    document.getElementById("shapes").style.display="none";
    clicked = Date.now();
    var reactionTime = (clicked-startTime)/1000;
    document.getElementById("time").innerHTML=reactionTime+" seconds!";
    var randomDelay = (Math.random()*2)*1000;
    setTimeout(appear, randomDelay);
}
function appear(){
    var ranTop = Math.random()*300;
    var ranLeft = Math.random()*300;
    var size = Math.random()*250;
    var curve = Math.random();
    if(curve<=0.3){
        document.getElementById("shapes").style.borderRadius=0+"px";
    }else{
        document.getElementById("shapes").style.borderRadius=100+"px";
    }
    var ranColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.getElementById("shapes").style.backgroundColor=ranColor;
    document.getElementById("shapes").style.top=ranTop;
    document.getElementById("shapes").style.left=ranLeft;
    document.getElementById("shapes").style.height=size;
    document.getElementById("shapes").style.width=size;
    document.getElementById("shapes").style.display="block";   
    var startTime = Date.now(); 
}