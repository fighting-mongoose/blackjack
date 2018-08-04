

var dealer = [];





console.log("dealer " + dealer)

var suites = ["spades", "hearts", "clubs", "diamonds"];
var cards = ["2", "3", "4", '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

var cardObjsArray = [];

function GenerateCards() {
    for (let i = 0; i < suites.length; i++) {
        // console.log("this ran: " + i);
        for (let y = 0; y < cards.length; y++) {

            cardObjsArray.push(new Card(cards[y], suites[i]))
        }

    }
    shuffleDeck();
}



function shuffle(array) {
    // shuffles any array
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}
// SHUFFLING THE ORIGINAL DECK

function shuffleDeck() {
    for (var k = cardObjsArray.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = cardObjsArray[k];
        cardObjsArray[k] = cardObjsArray[j];
        cardObjsArray[j] = temp;
    }
    console.log(cardObjsArray);
    return cardObjsArray;
}
function Card(name, suite) {
    this.name = name;
    // this.cardsImage = image;
    this.cardsSuite = suite;
    this.value = (this.name == "Jack" || this.name == "Queen" || this.name == "King") ? 10 : (this.name == "Ace") ? [1, 11] : parseInt(this.name);
}
function TotalSumofHand() {

}

function createDOMCard(cardObj) {


    console.log(cardObj);
    var newDiv = $('<div>');


    if (cardObj.name == "Jack" || cardObj.name == "Queen" || cardObj.name == "cardObj" || cardObj.name == "Ace") {

        console.log("face value")

        switch (cardObj.name) {
            case "Jack":
                newDiv.css('background-image', imageUrl);
                break;

            case "Queen":
                newDiv.css('background-image', imageUrl);
                break;

            case "King":
                newDiv.css('background-image', imageUrl);
                break;

            case "Ace":
                newDiv.css('background-image', imageUrl);
                break;
        }

    } else {
        console.log("number card");
        // use cardObj.cardSuite
        newDiv.attr({
            "class": cardObj.cardsSuite,
            "data-value": cardObj.value()
        });

        console.log(cardObj.name);

    }
    newDiv.text("new text");
    $('#cardDOM').appendTo(newDiv);
}
// this Generates the deck. in order first
GenerateCards();







// $(document).on("click", function () {
//     console.log('ive been clicked');

//     let newDiv = $('<div>');

//     newDiv.text(cardObjsArray[0].name)
//     newDiv.attr({
//         "class": cardObjsArray[0].cardsSuite + " topLeft bottomRight",
//         "data-value": cardObjsArray[0].value()
//     });

//     // $('#cardDOM').text(cardObjsArray[0].name)
//     $("#cardDOM").append(newDiv);

// })


