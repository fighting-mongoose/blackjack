//This is for after the player logs in. 
console.log("Hello World!");

$(document).ready(function () {


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
        }).then(function (player) {
            console.log("call back from new player");
            console.log(player);
            //get find all where 
            window.location.href = "/index";
            console.log("successfully signed up!");



        });

    });



    $("#playButton").on("click", function () {
        event.preventDefault();
        window.location.href = "/index";


    })


});




