// The root of all executions.

/* global util */
/* global map */
/* global network */
/* global sidebar */
/* global faction */

var vars = {
    planets_by_id: {}
};

function displaySidebarInfo(planet) {
    console.log("displaySidebarInfo");
    console.log(planet);
    sidebar.draw([
        {"owner": planet.owner.name},
        {"id": planet.id}
    ]);
    sidebar.color(planet.owner.bright_color);
};

function initMap(planets) {
    console.log("initMap");
    planets = util.addCoords(planets);
    
    for (var i in planets) {
        planet = planets[i];
        vars.planets_by_id[planet.id] = planet;
        map.add_icon(planet);
    }
    for (var i in planets) {
        planets[i].addCallback(displaySidebarInfo);
    }
    
}

function updatePlanet(planet) {
    map.updatePlanet(planet);
}

document.addEventListener('DOMContentLoaded', function() {
    
    var user_select = document.getElementById("user_select");
    
    map.init("map");
    sidebar.init("sidebar");
    network.setDomain("localhost:8080");
    network.getPlanets(initMap);
    
    var callbacks = {};
    callbacks["user.hello"] = function(hello) {
        console.log("ws: user.hello");
        console.log(hello);
    };
    callbacks["planet.conquered"] = function(message) {
        console.log(message);
        var planet = vars.planets_by_id[message.planetId];
        planet.owner = faction[message.attackingFaction];
        updatePlanet(planet);
    };
    
    network.Session(user_select.value, callbacks);
}, false);