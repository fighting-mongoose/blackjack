//This is for after the player logs in. 
console.log("Hello World!");
var newMoney; //used in the add money button
var playerFunds; //used in the add money button
var dealer;
var player;
var score;
var dealerScore;
var userScore;
var userBet;


$(document).ready(function () {
    $("#bets").show();
    $("#showHit_and_stayBtns").hide();
    $("#mainCard").hide();

    // document.getElementById("cashOut").disabled = true;

    //sign up form to create a new player
    $("#signUpSubmit").on("click", function (event) {
        event.preventDefault();
        // console.log("I clicked");
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

        }).then(function (info) {
            window.location.href = "/index/" + info.id;
            console.log(info);
            console.log("successfully signed up!"); s
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
    });

    $("#betFive").on("click", function (event) {
        event.preventDefault();
        userBet = 5;
        $("#bets").hide();
        $("#mainCard").show();
    });

    $("#betTen").on("click", function (event) {
        event.preventDefault();
        userBet = 10;
        $("#bets").hide();
        $("#mainCard").show();
    });

    $("#betAll").on("click", function (event) {
        event.preventDefault();
        var playerFunds = document.getElementById("playerFunds").innerText;
        userBet = parseInt(playerFunds);
        $("#bets").hide();
        $("#mainCard").show();
    });




    //the function states that it is not a number
    $("#addMoney").on("click", function (event) {
        event.preventDefault();
        playerFunds = document.getElementById("playerFunds").innerText;
        console.log(playerFunds);
        playerFunds = parseInt(playerFunds);

        console.log("add $ function has been run");

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



    //These do not work yet. I need math logic that adds the cards together as they are dealt 
    $("#stayBtn").on("click", function () {

        $("#stayBtn").disabled = true;

        //if dealer score is less <= 17;

        switch (scorePos) {
            case dealerScore >= 17:
                dealerResult();
                break;

            case dealerScore = 21 && userScore !== 21:
                dealerWin();
                break;

            case userScore = 21:
                userWin();
                break;

            default:
                console.log("there was an error in the adding logic");

        }

    });

    function dealerWin() {
        console.log("You Lose!");
        userBet--;
        restartGame();
    }

    function dealerResult() {
        if (dealerScore <= 21 && userScore !== 21) {
            console.log("Dealer Wins..")
            userBet--;
            restartGame();
        } else {
            console.log("You Win!");
            userBet++
            restartGame();
        }
    };

    function userWin() {
        console.log("You Win!");
        userBet++;
        restartGame();
    };

    function restartGame() {
        $("#mainCard").hide();
        $("#showHit_and_stayBtns").hide();
        $("#bets").show();
    };

});


 // $("#cashOut").on("click", function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         method: "GET",
    //         url: "api/player/signout"
    //     }).then(function (response) {
    //         console.log(response);
    //     })

    // });


// $("#cashOut").on("click", function (event) {

//     event.preventDefault();
//     var playerIdSet = $(this).data("player-id");
//     playerUpDatter(playerIdSet, false);
// });




