let threshold = parseInt(prompt("Please Enter the threshold score: "));
let i = 0;
let ply1score = 0;
let ply2score = 0;
let a;
function rollDice(){
    a = Math.floor(Math.random()*6) + 1;
    if(i%2===0){
        ply1score = ply1score + a;
        document.getElementById("ply1").value = ply1score;
        if(ply1score >= threshold){
            document.getElementById("result").innerHTML = "Player 1 wins";
        }
    }
    else{
        ply2score = ply2score + a;
        document.getElementById("ply2").value = ply2score;
        if(ply2score >= threshold){
            document.getElementById("result").innerHTML = "Player 2 wins";
        }
    }
    i = i+1;
}