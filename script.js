var totalatampt=1;
function play() {
    let num = document.getElementById('guessnum').value;
    let randnum = Math.floor(Math.random() * 100) + 1;
    if(num>0){
    if (randnum == num) {
        let result = document.getElementById('result');
        document.getElementById('totalatmpt').innerText="total attempt="+totalatampt;
        result.innerText = "Congratulations! You guessed it!";
        result.style.color = "green";
        document.getElementById('guessnum').value=null;
        totalatampt=1;
    }
    else if (num < randnum) {
        let result = document.getElementById('result');
        result.innerText = "Your guess is too low!";
        result.style.color = "red";
        document.getElementById('guessnum').value=null;
        totalatampt=totalatampt+1;
    }
    else if (num > randnum) {
        let result = document.getElementById('result');
        result.innerText = "Your guess is too high!";
        result.style.color = "red";
        document.getElementById('guessnum').value=null;
        totalatampt=totalatampt+1;
    }
}else{
    document.getElementById('result').innerText="please enter a number";
}
}