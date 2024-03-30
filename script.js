var Timer=60;
var score=0;
var hitrn=0


function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makebubble(){
    var clutter="";

    for (var i=1;i<=102;i++){
        var rn= Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${rn}</div>`;
    
    }
    document.querySelector("#bottom-panel").innerHTML=clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if(Timer>0){
        Timer--;
        document.querySelector("#timerval").textContent=Timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#bottom-panel").innerHTML=`<h1>Game Over</h1>`
    }

    },1000)
}

document.querySelector("#bottom-panel")
.addEventListener("click",function(dets){
    var clicknum=Number(dets.target.textContent);
    if(clicknum==hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
});

runTimer();
makebubble();
getNewHit();
increaseScore();
