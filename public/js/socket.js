
$(function () {
    var socket = io();
    $(".dealerButton").on("click", function () {
        var message = "the deck from " + socket.id;
        socket.emit('dealerButton', message);
        console.log("requesting a card");
    });
    socket.on('dealerButton', function (card) {
        console.log("this is what we got " + card.name + " " + card.cardsSuite +
            " the vaule of the card is " + card.value);
    });
});