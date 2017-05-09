// JavaScript source code
// Code to start race

var counter = 0;
var timerVar;

function startRace() {
    document.getElementById("redlight").src = "images/greenlight.png";

    
    timerVar = setInterval(moveRacers, 500);
    
   
}

function moveRacers() {
    var moveAmountSpongebob = Math.floor((Math.random() * 100) + 1);
    var moveAmountPatrick = Math.floor((Math.random() * 100) + 1);

    var spongebobImage = document.getElementById("spongebob");
    var patrickImage = document.getElementById("patrick");
    var rightSpongebob = parseInt(spongebobImage.style.left) || 0;
    var rightPatrick = parseInt(patrickImage.style.left) || 0;



    rightSpongebob += moveAmountSpongebob;
    spongebobImage.style.left = rightSpongebob + "px";

    rightPatrick += moveAmountPatrick;
    patrickImage.style.left = rightPatrick + "px";

    checkForWinner(rightSpongebob, rightPatrick)
    counter += 1;

}

function checkForWinner(spongebobPostion, patrickPosition){
    var sPosition = spongebobPostion;
    var pPosition = patrickPosition
    
    
    if(counter == 15)
    {
        clearInterval(timerVar);
        if(sPosition > pPosition){
            document.getElementById("spongebobwins").style.visibility = "visible";
            document.getElementById("redlight").style.visibility = "hidden";
            document.getElementById("titlelabel").innerHTML = "SPONGEBOB WINS!! Tap Spongebob to race again!!" 
        }
        else{
            document.getElementById("patrickwins").style.visibility = "visible";
            document.getElementById("titlelabel").innerHTML = "PATRICK WINS!! Tap Patrick to race again!!"
            document.getElementById("redlight").style.visibility = "hidden";
        }
    }
}

function restart() {
    location.reload();
}

