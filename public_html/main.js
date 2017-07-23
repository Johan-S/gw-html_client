// The root of all executions.

/* global util */
/* global map */
/* global sidebar */

function initMap(planets) {
    console.log("initMap");
    planets = util.addCoords(planets);
    
    
    for (var i in planets) {
        planet = planets[i];
        map.add_icon(planet);
    }
    function displaySidebarInfo(planet) {
        console.log("displaySidebarInfo");
        console.log(planet);
        sidebar.draw([
            {"owner": planet.owner.name},
            {"id": planet.id}
        ]);
        sidebar.color(planet.owner.bright_color);
    };
    for (var i in planets) {
        planets[i].addCallback(displaySidebarInfo);
    }
    
}

function network() {    
    var planet_url = "http://localhost:8080/data/planet"
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var json = JSON.parse(xhttp.responseText);
           initMap(json.data);
        }
    };
    xhttp.open("GET", "http://localhost:8080/data/planet");
    xhttp.send();
}

function sendUserData(user_token) {
    var ws_url = "ws://localhost:8080/websocket?accessToken=" + user_token;
    var socket = new WebSocket(ws_url);
    socket.onmessage = function (event) {
        console.log(event.data);
    };
}


document.addEventListener('DOMContentLoaded', function() {
    
    var user_select = document.getElementById("user_select");
    sendUserData(user_select.value);
    
    map.init("map");
    sidebar.init("sidebar");
    
    network();
}, false);