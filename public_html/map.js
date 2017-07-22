

var map = new (function() {
    this.init = function (id) {
        this.map_screen = document.getElementById(id);
    };
    
    this.add = function(planet) {
        var x = planet.x;
        var y = planet.y;
        var obj = document.createElement("div");
        obj.style.transform = "translate(" + x + "px, " + y + "px)";
        obj.className = "planet";
        obj.style.color = planet.color;
        obj.addEventListener("click", function() {
            planet.click();
        });
        obj.appendChild(document.createTextNode(planet.symbol));
        this.map_screen.appendChild(obj);
    };
})();
