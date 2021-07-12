score = 0;

function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score" + score
}

function saveScore() {
    localStorage.setItem("score", score);
}

function Login() {
    window.location = "quiz_login.html";
}