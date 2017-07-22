
var util = new (function() {
    var factionColors = {
        "C": "red",
        "A": "green",
        "U": "blue",
        "S": "yellow"
    };
    
    this.Planet = function (x, y, owner) {
        this.x = x;
        this.y = y;
        this.owner = owner;
        this.symbol = owner[0];
        this.color = factionColors[owner[0]];
        this.callbacks = [];
    };
    this.Planet.prototype.distance = function(planet) {
        var dx = this.x - planet.x;
        var dy = this.y - planet.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    this.Planet.prototype.click = function() {
        for (var i in this.callbacks) {
            this.callbacks[i](this);
        }
    };
    this.Planet.prototype.addCallback = function(callback) {
        this.callbacks.push(callback);
    };
    this.planetComparator = function(a, b) {
        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
        if (a.x < b.x) return -1;
        if (a.x > b.x) return 1;
        return 0;
    };
    
    this.generatePlanets = function(n) {
        var planets = [];
        var factions = ["Aeon", "Cybran", "UEF", "Seraphim"];
        for (var f in factions) {
            var faction = factions[f];
            var i = 0;
            i = 0;
            for (i = 0; i < n; ++i) {
                var d = 0;
                var planet = null;
                while (d < 25) {
                    var x = Math.random() * 900 + 50;
                    var y = Math.random() * 500 + 50;
                    planet = new util.Planet(x, y, faction);
                    d = 1000;
                    for (var j in planets) {
                        d = Math.min(d, planet.distance(planets[j]));
                    }
                }
                planets.push(planet);
            }
        }
        planets.sort(util.planetComparator);
        return planets;
    };
})();