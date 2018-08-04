var deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}
var shuffled = shuffleArray(deck);
var dealer = [];


dealer.push(shuffled[1], shuffled[2]);

console.log(shuffled);
console.log("dealer " + dealer)

var suites = ["spades", "hearts", "clubs", "diamonds"];
var cards = ["2", "3", "4", '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

var cardObjsArray = [];

function GenerateCards() {
    for (let i = 0; i < suites.length; i++) {
        // console.log("this ran: " + i);
        for (let y = 0; y < cards.length; y++) {
            // console.log("this ran inside loop: " + y);
            cardObjsArray.push(new Card(cards[y], suites[i]))
        }
    }
}

function Card(name, suite) {
    this.name = name;
    // this.cardsImage = image;
    this.cardsSuite = suite;

    // this.cardImage = function(){
    //     switch(this.cardsSuite){
    //         case "spades":
    //         spadesImages(this.name);
    //         break;
    //     }
    // }

    // this.cardDisplay = function(){
    //     if(this.name == "Jack" || this.name == "Queen" || this.name == "King" || this.name == "Ace"){
    //         // use background image
    //     }else{
    //         // use this.cardSuite and 
    //     }
    // }

    this.value = function () {
        if (this.name == "Jack" || this.name == "Queen" || this.name == "King") {
            return 10;
        }

        if (parseInt(this.name) > 1) {
            return parseInt(this.name);
        }

        if (this.name == 'Ace') {
            return 1 || 11;
        }

        return null;
    }
}


function createDOMCard(cardObj) {
    console.log("function ran")

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
GenerateCards();

console.log(cardObjsArray)



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


