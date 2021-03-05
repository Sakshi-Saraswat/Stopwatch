var seconds=00;

const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
const reset=document.querySelector(".reset");
var minutes=document.getElementById("#minutes");
var seconds=document.getElementById("#seconds");
var Interval;
var minutes=0;

start.addEventListener('click',function(){
    
        //clearInterval(Interval);
        Interval = setInterval(startTimer, 20);

});


function startTimer() {
    
    seconds++; 
    
    if(seconds <= 9){
        document.getElementById("seconds").innerHTML = "0" + seconds;
        
    }
    
    if (seconds > 9){
        document.getElementById("seconds").innerHTML = seconds;
        
    } 
    
    if(seconds == 60) {
      //console.log("minutes");
      minutes++;
      document.getElementById("minutes").innerHTML = "0" + minutes;
      seconds = 0;
      document.getElementById("seconds").innerHTML = "0" + 0;
    }
    
    if (minutes < 9){
        document.getElementById("minutes").innerHTML= "0" + minutes;
    }
    if (minutes > 9){
        document.getElementById("minutes").innerHTML=  minutes;
    }
}

stop.addEventListener('click',function(){
    clearInterval(Interval);
});

reset.addEventListener('click',function(){
    minutes=0;
    seconds=0;
    document.getElementById("seconds").innerHTML = "0" + seconds;
    document.getElementById("minutes").innerHTML = "0" + minutes;

});
  


