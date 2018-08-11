//This is for after the player logs in. 
console.log("Hello World!");
var newMoney;
var playerFunds;

$(document).ready(function () {
    $("#showHit_and_stayBtns").hide();



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
            email: $("#inputEmail4").val().trim(),
            password: $("#inputPassword4").val().trim()
        };

        $.post(
            // type: 'GET',
            '/api/players/signin',
            user


        )
            .then(function (data) {
                console.log("ajax user callback");
                if (data != null) {
                    window.location.href = "/index/" + data.id;
                    console.log("data = " + data.id);
                } else {
                    alert("You are not a player!")
                }
            });
    })

    $("#cashOut").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            method: "GET",
            url: "api/player/signout"
        }).then(function (response) {
            console.log(response);
        })

    });


    //the function states that it is not a number
    $("#addMoney").on("click", function (event) {
        playerFunds = document.getElementById("playerFunds").innerText;
        console.log(playerFunds);

        playerFunds = parseInt(playerFunds);

        console.log("add $ function has been run");

        event.preventDefault();
        playerFunds = playerFunds + 10;
        newMoney = playerFunds;
        $("#playerFunds").text(newMoney);
        console.log(playerFunds);
        console.log(newMoney);
        alert("You added $10");

    })


    $("#dealBtn").on("click", function () {
        // document.getElementById("#dealBtn").disabled = true;

        dealer(deck);
        player(deck);
        $("#dealBtn").hide();
        $("#showHit_and_stayBtns").show();
    })
    $("#hitBtn").on("click", function () {
        console.log("hit clicked ")
        hitMe();
    });
});



// $("#cashOut").on("click", function (event) {

//     event.preventDefault();
//     var playerIdSet = $(this).data("player-id");
//     playerUpDatter(playerIdSet, false);
// });




