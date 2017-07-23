// Contains attributes specific for the different factions.

var faction = new (function() {
    function Faction(name, color, bright_color) {
        this.name = name;
        this.symbol = name[0];
        this.color = color;
        this.bright_color = bright_color;
        this.icon_url = "img/" + name + "_icon.png";
    }
    this.AEON = new Faction("Aeon", "#0a0", "#7f7");
    this.CYBRAN = new Faction("Cybran", "#a00", "#f77");
    this.SERAPHIM = new Faction("Seraphim", "#aa0", "#ff7");
    this.UEF = new Faction("UEF", "#00a", "#77f");
})();
