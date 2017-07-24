// Utility functions for manipulating the sidebar.

var sidebar = new (function() {
    this.init = function (id) {
        this.sidebar_node = document.getElementById(id);
    };
    this.draw = function(attr_list) {
        this.sidebar_node.innerHTML = "";
        for (var i in attr_list) {
            for (var j in attr_list[i]) {
                var text = attr_list[i][j];
                var div = document.createElement("div");
                div.appendChild(document.createTextNode(j + ": " + text));
                this.sidebar_node.appendChild(div);
            }
        }
    };
    this.color = function(color) {
        this.sidebar_node.style["background-color"] = color;
    };
})();