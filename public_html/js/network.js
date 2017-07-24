
/* global ws */

var network = new (function() {
    
    var private = {};
    
    this.setDomain = function(domain) {
        private.domain = domain;
    };
    
    this.Session = function(user_token, ws_handlers) {
        var ws_url = "ws://" + private.domain + "/websocket?accessToken=" + user_token;
        var socket = new WebSocket(ws_url);
        socket.onmessage = function (event) {
            var data = JSON.parse(event.data);
            var handler = ws_handlers[data.action];
            if (handler) {
                handler(data.data);
            } else {
                console.log("No handler registered for this message: " + data.action);
                console.log(data);
            }
        };
    };
    
    this.getPlanets = function(callback) {
        var planet_url = "http://" + private.domain + "/data/planet";

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(response) {
            if (this.readyState == 4 && this.status == 200) {
               var json = JSON.parse(xhttp.responseText);
               callback(json.data);
            }
        };
        xhttp.open("GET", planet_url);
        xhttp.send();
    };
})();
