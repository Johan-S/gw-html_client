/* global util */
/* global map */
/* global sidebar */
document.addEventListener('DOMContentLoaded', function() {
    map.init("map");
    sidebar.init("sidebar");
    var planets = util.generatePlanets(30);
    
    for (var i in planets) {
        planet = planets[i];
        map.add(planet);
    }
    function displaySidebarInfo(planet) {
        console.log("displaySidebarInfo");
        sidebar.draw(planet.owner);
    };
    for (var i in planets) {
        planets[i].addCallback(displaySidebarInfo);
    }
}, false);