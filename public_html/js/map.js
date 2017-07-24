// Responsible for drawing the map.

var map = new (function() {
    this.init = function (id) {
        this.map_screen = document.getElementById(id);
    };
    
    this.planet_nodes = {};
    
    this.add_icon = function(planet) {
        var x = planet.x;
        var y = planet.y;
        var faction = planet.owner;
        var obj = document.createElement("img");
        obj.style.transform = "translate(" + x + "px, " + y + "px)";
        obj.src = faction.icon_url;
        obj.className = "planet";
        obj.addEventListener("click", function() {
            planet.click();
        });
        this.map_screen.appendChild(obj);
        this.planet_nodes[planet.id] = obj;
    };
    
    this.updatePlanet = function(planet) {
        var x = planet.x;
        var y = planet.y;
        var faction = planet.owner;
        var obj = this.planet_nodes[planet.id];
        obj.style.transform = "translate(" + x + "px, " + y + "px)";
        obj.src = faction.icon_url;
        obj.className = "planet";
    };
})();
