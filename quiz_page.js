player1_name = localStorage.getItem("p1_name_input");
player2_name = localStorage.getItem("p2_name_input");

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player1_name + " : ";
document.getElementById("p2_name").innerHTML = player2_name + " : ";

document.getElementById("p1_score").innerHTML = player1_score;
document.getElementById("p2_score").innerHTML = player2_score;

document.getElementById("p_ques").innerHTML = "Question Turn - " + player1_name;
document.getElementById("p_ans").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1"
answer_turn = "player2"

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player_1_score = player1_score + 1;
            document.getElementById("p1_score").innerHTML = update_player_1_score;
        } else {
            update_player_2_score = player2_score + 1;
            document.getElementById("p2_score").innerHTML = update_player_2_score;
        }

        if (question_turn == "player1") {
            question_turn == "player2"
            document.getElementById("p_ques").innerHTML = "Question Turn - " + player2_name;
        } else {
            question_turn == "player1"
            document.getElementById("p_ques").innerHTML = "Question Turn - " + player1_name;
        }
    }
}