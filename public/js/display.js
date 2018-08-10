//This is for after the player logs in. 
console.log("Hello World!");

$(document).ready(function () {

    // var player = [];
    // var $playerData = $("#playerData");

    // getPlayer();


    // function getPlayer() {
    //     $.get("/api/player/:id", function (data) {
    //         player = data;
    //     })
    // }

    // function showPlayerInfo(player) {
    //     var $newPlayerRow = $(
    //         [
    //             `<li class='list-group-item>
    //             <span>
    //             ${player.text}
    //             </span>`
    //         ].join("")
    //     );

    //     $playerData.append($newPlayerRow);
    // }


    $("#signUpSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("I clicked");
        var newPlayer = {
            name: $("#signUpName").val().trim(),
            email: $("#inputEmail4").val().trim(),
            password: $("#inputPassword4").val().trim(),
            icon: $("input[name=blackjackImg]:checked").val(),
            total_credits: parseFloat($("#moneyAmount").val())
        }
        console.log(newPlayer);

        $.ajax('/api/players', {
            type: "POST",
            data: newPlayer
        }).then(function () {
            window.location.href = "/waitingRoom";
            console.log("successfully signed up!");
        });

    });
});




