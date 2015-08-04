function game() {
    var user_choice, points, life, computer_choice, arr, user_score, result;
    arr = ["rock", "scissor", "paper"];
    points = 0;
    result = $(".game_info");

    $("#play").click(function() {

        //Get Random computer choice
        computer_choice = arr[Math.floor(Math.random() * arr.length)];
        //Get user choice
        user_choice = $(".choice2:checked").val();
        life = $("#lifemeter").val();
        user_score = Number($("#score").val());
        // Check if user make choice
        if (user_choice !== undefined) {

            if (user_choice == "rock" && computer_choice == "scissor") {
                $("#score").val(user_score + 2);
                result.text(name + " " + "you win!!");
            } else if (user_choice == "scissor" && computer_choice == "paper") {
                $("#score").val(user_score + 2);
                result.text(name + " " + "you win!!");
            } else if (user_choice == "paper" && computer_choice == "rock") {
                $("#score").val(user_score + 2);
                result.text(name + " " + "you win!!");
            } else if (user_choice == "rock" && computer_choice == "paper") {
                $("#lifemeter").val(life - 10);
                result.text("Computer wins");
            } else if (user_choice == "scissor" && computer_choice == "rock") {
                $("#lifemeter").val(life - 10);
                result.text("Computer wins");
            } else if (user_choice == "paper" && computer_choice == "scissor") {
                $("#lifemeter").val(life - 10);
                result.text("Computer wins");
            } else if (user_choice == computer_choice) {
                $("#score").val(user_score + 1);
                result.text("It's a draw");
            }
        } else {
            result.text("Please make your choice!");
            console.log(user_choice);
        }
        //Checking if user health=0 game is over
        if (life == 0) {
            alert("Game Over");
            //Check if user want to play again if result false game end
            var game = confirm("Do you Want to pay again?");
            if (game == true) {
                $("#lifemeter").val(100);
                $("#score").val(0);
                result.text(name);
            } else {
                sessionStorage.clear();
                $(".game").fadeOut(300);
                $("header").fadeIn(300);
                $("#get_name").val("");
            }
        }

    });
}



$(function() {
    $("#login").click(function() {
        sessionStorage.name = $("#get_name").val();
        name = sessionStorage.name;
        $(".game_info").text("Make your choice and play");
        $("header").fadeOut(300);
        $(".game").fadeIn(300);
    });
    $("#close").click(function() {
        sessionStorage.clear();
        $(".game").fadeOut(300);
        $("header").fadeIn(300);
        $("#get_name").val("");
    });
    game();
});
