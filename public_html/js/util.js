// Contains utilities that doesn't fit in other files.

/* global faction */

var util = new (function() {
    
    this.Planet = function (x, y, owner, id) {
        this.x = x;
        this.y = y;
        this.owner = faction[owner];
        this.id = id;
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
    
    // seeded random so the map looks the same every time.
    var rand = {
        t: 0,
        gen: function() {
            this.t = (this.t + 1337) * 31 % 10000;
            return this.t / 10000;
        }
        
    };
    
    this.addCoords = function(orig_planets) {
        var planets = [];
        for (var i in orig_planets) {
            var orig_planet = orig_planets[i];
            var faction = orig_planet.attributes.currentOwner;
            var id = orig_planet.id;
            
            var d = 0;
            var planet = null;
            while (d < 50) {
                var x = rand.gen() * 900 + 50;
                var y = rand.gen() * 500 + 50;
                planet = new util.Planet(x, y, faction, id);
                d = 1000;
                for (var j in planets) {
                    d = Math.min(d, planet.distance(planets[j]));
                }
            }
            planets.push(planet);
        }
        return planets;
    };
})();