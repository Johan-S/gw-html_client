
var sidebar = new (function() {
    this.init = function (id) {
        console.log("sidebar.init(\"" + id + "\")");
        this.sidebar_node = document.getElementById(id);
    };
    this.draw = function(text) {
        this.sidebar_node.innerHTML = "";
        this.sidebar_node.appendChild(document.createTextNode("owner: "));
        this.sidebar_node.appendChild(document.createTextNode(text));
    };
})();