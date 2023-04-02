  
function doit(){ let player1=Math.random()*6;
let player2=Math.random()*6;
player1=Math.floor(player1)+1;
player2=Math.floor(player2)+1;
console.log(player1+ " "+player2);

var images=document.querySelectorAll(".dice img");
  console.log("here");
switch(player1)
{
        case 1: images[0].setAttribute("src","/images/dice1.png");
        break;
        case 2: images[0].setAttribute("src","/images/dice2.png");
        break;
        case 3: images[0].setAttribute("src","/images/dice3.png");
        break;
        case 4: images[0].setAttribute("src","/images/dice4.png");
        break;
        case 5: images[0].setAttribute("src","/images/dice5.png");
        break;
        case 6: images[0].setAttribute("src","/images/dice6.png");
        break;
        default:
            break;
}
switch(player2)
{
        case 1: images[1].setAttribute("src","/images/dice1.png");
        break;
        case 2: images[1].setAttribute("src","/images/dice2.png");
        break;
        case 3: images[1].setAttribute("src","/images/dice3.png");
        break;
        case 4: images[1].setAttribute("src","/images/dice4.png");
        break;
        case 5: images[1].setAttribute("src","/images/dice5.png");
        break;
        case 6: images[1].setAttribute("src","/images/dice6.png");
        break;
        default:
            break;
}
if(player1>player2)
{
  document.querySelector(".header h1").innerHTML="&#128514😒 player1 won   player2 loose "
}else if(player1<player2){
  document.querySelector(".header h1").innerHTML="player1 loose   palyer2  won &#128514 "
}
else{
  document.querySelector(".header h1").innerHTML="&#128514 Draw! kalol ho gyii &#128514"
}
}

doit();