//This is for after the player logs in. 

$(document).ready(function () {

    var player = [];
    var $playerData = $("#playerData");

    getPlayer();


    function getPlayer() {
        $.get("/api/player/:id", function (data) {
            player = data;
        })
    }

    function showPlayerInfo(player) {
        var $newPlayerRow = $(
            [
                `<li class='list-group-item>
                <span>
                ${player.text}
                </span>`
            ].join("")
        );

        $playerData.append($newPlayerRow);
    }


})
