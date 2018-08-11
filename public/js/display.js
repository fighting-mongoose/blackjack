//This is for after the player logs in. 
console.log("Hello World!");
var newMoney;
var playerFunds;

playerFunds = parseInt($("#playerFunds"));
newMoney = parseInt(playerFunds) + 10;

$(document).ready(function () {

    //sign up form to create a new player
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



            window.location.href = "/index";
            console.log("successfully signed up!");



        });

    });

    //log in for returning players
    $("#signIn").on("click", function (event) {
        event.preventDefault();

        var user = {
            email: $("#inputEmail4").val(),
            password: $("#inputPassword4").val()
        };

        $.ajax({
            type: 'GET',
            data: JSON.stringify(user),
            contentType: 'application/json',
            url: 'http://localhost:3000/api/players/signin',

        }).then(function (data) {
            if (data == true) {
                window.location.href = "/index";
            } else {
                alert("You are not a player!")
            }
        });
    })

    $("#cashOut").on("click", function (event) {
        event.preventDefault();
        cashOut();

    });


    //the function states that it is not a number
    $("#addMoney").on("click", function (event) {
        event.preventDefault();
        console.log("add $ function has been run");

        $("#playerFunds").append("$" + newMoney);

    })

});








