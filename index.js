var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceImage1="dice"+randomnumber1+".png";
var randomdicesource1="images/"+randomdiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdicesource1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player2 wins";
}

