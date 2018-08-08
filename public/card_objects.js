var suites = ["spades", "hearts", "clubs", "diamonds"];
var cards = ["2", "3", "4", '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var numberPlayers = 3;//$("#numberPlayers");

// EMPTY ARRAY FOR THE DECK TO GET SHUFFLED INTO
var deck = [];

function GenerateCards() {
    for (let i = 0; i < suites.length; i++) {
        // console.log("this ran: " + i);
        for (let y = 0; y < cards.length; y++) {

            deck.push(new Card(cards[y], suites[i]))
        }

    }
    shuffleDeck();
}
console.log(deck);
// SHUFFLING THE ORIGINAL DECK

function shuffleDeck() {
    for (var k = deck.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = deck[k];
        deck[k] = deck[j];
        deck[j] = temp;
    }

    return deck;
}
function Card(name, suite) {
    this.name = name;
    // this.cardsImage = image;
    this.cardsSuite = suite;
    this.value = (this.name == "Jack" || this.name == "Queen" || this.name == "King") ? 10 : (this.name == "Ace") ? [1, 11] : parseInt(this.name);
}
function TotalSumofHand() {

}
function dealCards(deck) {
    var playersHandTotal = 2;

    var playersCards = [];

    for (var p = 0; p < playersHandTotal; p++) {
        var randomCardGrabber = Math.floor(Math.random() * 51);
        playersCards.push(deck[randomCardGrabber]);

    } console.log("players cards should be " + playersCards)
    console.log(randomCardGrabber);
    $('body').append(playersCards[0].name + ' ' + playersCards[0].cardsSuite + " || " + playersCards[1].name + ' ' + playersCards[1].cardsSuite + "<br>")
}
// so passing out two cards per player. if player has cards then make it true.

function passOutCards() {
    console.log("done son")
    for (var m = 0; m < numberPlayers; m++) {
        // need to run dealCards for the number of each player

        dealCards(deck);

    }
}
function createDOMCard(deck) {



    var newDiv = $('<div>');


    if (Card.name == "Jack" || Card.name == "Queen" || Card.name == "King" || Card.name == "Ace") {

        console.log("face value")

        switch (Card.name) {
            case "Jack":
                newDiv.css('background-image', imageUrl + Card.name);
                break;

            case "Queen":
                newDiv.css('background-image', imageUrl + Card.name);
                break;

            case "King":
                newDiv.css('background-image', imageUrl + Card.name);
                break;

            case "Ace":
                newDiv.css('background-image', imageUrl + Card.name);
                break;
        }

    } else {
        console.log("number card");
        // use cardObj.cardSuite
        newDiv.attr({
            "class": Card.cardsSuite,
            "data-value": Card.value
        });

        console.log(Card.name);

    }
    newDiv.text("new text");
    $('#cardDOM').appendTo(newDiv);
}
// this Generates the deck. in order first
GenerateCards();







$(document).on("click", function () {
    dealCards(deck);
    passOutCards();
});
//     console.log('ive been clicked');

//     let newDiv = $('<div>');

//     newDiv.text(deck[0].name)
//     newDiv.attr({
//         "class": deck[0].cardsSuite + " topLeft bottomRight",
//         "data-value": deck[0].value()
//     });

//     // $('#cardDOM').text(deck[0].name)
//     $("#cardDOM").append(newDiv);

// })


