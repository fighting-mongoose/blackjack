var suites = ["spades", "hearts", "clubs", "diamonds"];
var cards = ["2", "3", "4", '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var playersCards = [];
var dealersHand = [];

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
    this.value = (this.name == "jack" || this.name == "queen" || this.name == "king") ? 10 : (this.name == "ace") ? [1, 11] : parseInt(this.name);
}

function player(deck) {

    for (var p = 0; p < 2; p++) {
        var randomCardGrabber = Math.floor(Math.random() * deck.length);
        playersCards.push(deck[randomCardGrabber]);
        deck.splice(randomCardGrabber, 1);
        // console.log("card grabber " + playersCards[p].name)
    }

    var cardPlacement = $('#cardPlacement');
    //    players hand is goes to
    cardPlacement.append("<img src=" + '"/pics/' + playersCards[0].name + playersCards[0].cardsSuite + '.png' + '"' + 'value=' + '"' + playersCards[0].value + '"' + 'id=' + '"' + 'cardImg' + '"' + "/>" + "<img src=" + '"/pics/' + playersCards[1].name + playersCards[1].cardsSuite + '.png' + '"' + 'value=' + '"' + playersCards[1].value + '"' + 'id=' + '"' + 'cardImg' + '"' + "/>")

}

function dealer(deck) {

    for (var p = 0; p < 2; p++) {
        var randomCardGrabber = Math.floor(Math.random() * deck.length);

        dealersHand.push(deck[randomCardGrabber]);
        deck.splice(randomCardGrabber, 1);
        console.log(dealersHand[p])
    }

    var dealerPlacement = $('#dealerPlacement');

    dealerPlacement.append("<img src=" + '"/pics/' + dealersHand[0].name + dealersHand[0].cardsSuite + '.png' + '"' + 'value=' + '"' + dealersHand[0].value + '"' + 'id=' + '"' + 'cardImg' + '"' + "/>" + "<img src=" + '"/pics/' + dealersHand[1].name + dealersHand[1].cardsSuite + '.png' + '"' + 'value=' + '"' + dealersHand[1].value + '"' + 'id=' + '"' + 'cardImg' + '"' + "/>")
    $('#total').append(dealersHand[0].value + dealersHand[1].value);

    for (var m = 0; m < dealersHand.length; m++) {

        // var cards = Math.floor(Math.random() * 52) + 1;
        //return dealersHand.splice(deck, 1)[0];
        console.log(deck.length);

        // console.log(deck + "removing cards from array");
    }
    // so passing out two cards per player. if player has cards then make it true.

}
/// HIT FUNCTION
function hitMe() {
    var randomCardGrabber = Math.floor(Math.random() * (deck.length));
    console.log("cardnumber " + randomCardGrabber)
    playersCards.push(deck[randomCardGrabber]);
    deck.splice(randomCardGrabber, 1);
    console.log("hit function: " + playersCards.length);
    $('#cardPlacement').append("<img src=" + '"/pics/' + playersCards[playersCards.length - 1].name + playersCards[playersCards.length - 1].cardsSuite + '.png' + '"' + 'value=' + '"' + playersCards[playersCards.length - 1].value + '"' + 'id=' + '"' + 'cardImg' + '"' + "/>");

}

GenerateCards();

