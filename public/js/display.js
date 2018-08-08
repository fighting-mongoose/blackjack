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
            icon: "3",
            totalCredits: $("#moneyAmount").val()
        }
        console.log(newPlayer);

        $.ajax('/api/players', {
            type: "POST",
            data: newPlayer
        }).then(function () {
            console.log("fuck!");
        });

    });
});



