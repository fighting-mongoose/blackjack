var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");
var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

var http = require('http').Server(app);
var io = require("socket.io")(http);

// var deck = require(__dirname + "js/cardobject.js");
var discardPile = [];
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json());

// Set Handlebars.
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);


io.on('connection', function (socket) {
    socket.on('dealerButton', function (message) {
        var cardNumber = [Math.floor(Math.random() * deck.length - 1)];
        var card = [deck[cardNumber], message];
        console.log("here is the card " + card[0].name + " " + card[0].cardsSuite + " the value of the card is " + card[0].value);
        console.log(deck.length);
        discardPile.push(deck[cardNumber]);
        console.log("number in graveyard " + discardPile.length + " card placed " + deck[cardNumber]);
        deck.splice(cardNumber, 1);
        io.emit("dealerButton", card);
    });
});
db.sequelize.sync({ force: false }).then(function () {
    http.listen(PORT, function () {
        console.log("App now listening at localhost:" + PORT);
    });
});