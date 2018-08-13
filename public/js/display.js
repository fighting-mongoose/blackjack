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
        var playerFunds = document.getElementById("playerFunds").innerText;
        if (playerFunds < 5) {
            console.log("Sorry you don't have enough to bet...");
            confirm("Sorry you don't have enough to bet Add $10?");
        } else {
            userBet = 5;
            playerFunds = playerFunds - 5;
            $("#playerFunds").text(playerFunds);
            $("#bets").hide();
            $("#mainCard").show();
            $("#dealBtn").show();
        }
    });

    $("#betTen").on("click", function (event) {
        event.preventDefault();
        var playerFunds = document.getElementById("playerFunds").innerText;

        if (playerFunds < 10) {
            console.log("Sorry you don't have enough to bet...");
            confirm("Sorry you don't have enough to bet Add $10?");
            playerFunds += 10;
            $("#playerFunds").text(playerFunds);
        } else {
            userBet = 10;
            playerFunds = playerFunds - 10;
            $("#playerFunds").text(playerFunds);
            $("#bets").hide();
            $("#mainCard").show();
            $("#dealBtn").show();

        }
    });

    $("#betAll").on("click", function (event) {
        event.preventDefault();
        var playerFunds = document.getElementById("playerFunds").innerText;
        userBet = parseInt(playerFunds);

        if (playerFunds !== 0) {
            playerFunds = 0;
            $("#playerFunds").text(playerFunds);
            $("#bets").hide();
            $("#mainCard").show();
            $("#dealBtn").show();
        } else {
            console.log("Sorry you don't have enough to bet...");
            confirm("Sorry you don't have enough to bet Add $10?");
            playerFunds += 10;
            $("#playerFunds").text(playerFunds);


        }
    });

    //the function states that it is not a number
    $("#addMoney").on("click", function (event) {
        event.preventDefault();
        playerFunds = document.getElementById("playerFunds").innerText;
        console.log(playerFunds);
        playerFunds = parseInt(playerFunds);

        // console.log("add $ function has been run");

        playerFunds = playerFunds + 10;
        newMoney = playerFunds;
        $("#playerFunds").text(newMoney);
        // console.log(playerFunds);
        // console.log(newMoney);
        alert("You added $10");

    });

    function totals(hand) {
        var playerHand = [];
        var playerAce = [];
        for (i = 0; i < hand.length; i++) {
            if (hand[i].name == "ace") {
                playerAce.push(hand[i]);
            } else {
                playerHand.push(hand[i]);
            }
        };
        console.log(playerHand)
        console.log(playerAce);
        var total = 0;
        for (i = 0; i < playerHand.length; i++) {
            console.log(playerHand[i].value);
            total = total + parseInt(playerHand[i].value);
        }
        for (i = 0; i < playerAce.length; i++) {
            var total = total + playerAce[i].value[1];
        }
        for (i = 0; i < playerAce.length; i++) {
            if (total > 21) {
                total = total - 10;
            }
        }
        return total;
    };

    //more than one 

    // if (cardTotal > 10) {
    //     ace = 1;
    // } else {
    //     ace = 11;
    // }



    $("#dealBtn").on("click", function () {
        // document.getElementById("#dealBtn").disabled = true;
        dealer(deck);
        player(deck);
        $("#dealBtn").hide();
        $("#showHit_and_stayBtns").show();
        // totals();
    });

    $("#hitBtn").on("click", function () {
        // console.log("hit clicked ")
        hitMe();
        if (totals(playersCards) > 21) {
            dealerWin();
        };

    });



    //These do not work yet. I need math logic that adds the cards together as they are dealt 
    $("#stayBtn").on("click", function () {

        $("#stayBtn").disabled = true;
        console.log(playersCards);
        dealerScore = totals(dealersHand);
        userScore = totals(playersCards);
        console.log("player total " + userScore);
        console.log("dealer total " + dealerScore);
        //if dealer score is less <= 17;


        if (userScore > 21) {
            dealerWin();
        } else if (dealerScore < 21 && dealerScore > userScore) {
            dealerWin();
        } else if (userScore == 21) {
            userWin();
        } else if (userScore == dealerScore) {
            tiedGame();
        } else if (userScore < 21 && userScore > dealerScore) {
            userWin();
        } else {
            console.log("there was an error in the adding logic");
        }
    });
    function tiedGame() {
        alert("no winner")
        userBet++;
        restartGame();
    };
    function dealerWin() {
        alert("You Lose!");
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
        alert("You Win!");
        userBet++;
        restartGame();
    };

    function restartGame() {
        $("#mainCard").hide();
        $("#showHit_and_stayBtns").hide();
        $("#bets").show();
        playersCards = [];
        dealersHand = [];
        deck = [];
        GenerateCards();
        $("#cardPlacement").empty();
        $("#dealerPlacement").empty();
        $("#total").empty();
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




