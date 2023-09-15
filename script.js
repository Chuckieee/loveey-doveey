var usrName = Math.random() * 100;
console.log(Math.floor(usrName));

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

var userName = Math.random()
 userName = userName * 100;
 userName = Math.floor(userName) + 1; 
 console.log(userName)
function check() {
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore);
    var love = document.getElementById("yourName").value;
    var crush = document.getElementById("crushName").value;
    var loveResult = document.getElementById("loveResult");
    if (love === "" && crush === "") {
      alert("You are not well!");
    } else if (loveScore > 90) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Your Love Score is ${loveScore}. ${crush} loves you like your mama.`;

    } else if (loveScore <= 90 && loveScore > 80) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Love ${crush}. Your heart is safe.`;
    } else if (loveScore <= 80 && loveScore > 70) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `${crush} is a keeper.`;
    } else if (loveScore <= 70 && loveScore > 60) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `${love}, hold on to this one. Better partner no dey.`;
    } else if (loveScore <= 60 && loveScore > 50) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Trust ${crush}, but at your own risk!`;
    } else if (loveScore <= 50 && loveScore > 40) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Don't trust ${crush} too much. You might get hurt.`;
    } else if (loveScore <= 40 && loveScore > 30) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Run away from ${crush}!`;
    } else if (loveScore <= 30 && loveScore > 20) {
        score.innerHTML =`${loveScore}%`
      loveResult.innerHTML = `Tell ${crush} goodbye.`;
    } else if (loveScore <= 20) {
        score.innerHTML =`${loveScore}%`

      loveResult.innerHTML = `You and ${crush} are not meant for each other.`;
    }
  
    document.getElementById("yourName").value = "";
    document.getElementById("crushName").value = "";
    
  }
  
