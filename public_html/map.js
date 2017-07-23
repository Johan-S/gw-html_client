// Responsible for drawing the map.

var map = new (function() {
    this.init = function (id) {
        this.map_screen = document.getElementById(id);
    };
    
    this.add_text = function(planet) {
        var x = planet.x;
        var y = planet.y;
        var faction = planet.owner;
        var obj = document.createElement("div");
        obj.style.transform = "translate(" + x + "px, " + y + "px)";
        obj.className = "planet";
        obj.style.color = faction.color;
        obj.addEventListener("click", function() {
            planet.click();
        });
        obj.appendChild(document.createTextNode(faction.symbol));
        this.map_screen.appendChild(obj);
    };
    
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
        obj.appendChild(document.createTextNode(faction.symbol));
        this.map_screen.appendChild(obj);
    };
})();
