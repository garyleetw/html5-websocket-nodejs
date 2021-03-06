(function($) {

// WebSocket object
var ws;

// The Div element selected by jQuery selector
var div = this;

function onWsMessage(message) {
   var json = JSON.parse(message.data);

   if (json.type === 'message') {
   	content.prepend('<p>' + json.data.message + '</p>');
   }
}

$.fn.sendMessage = function () {
	$(this).click(function() {
    	ws.send("[message]");
	});
};

$.fn.createWebSocket = function () {
  if ("WebSocket" in window)
  {
     // Let us open a web socket
     ws = new WebSocket("ws://svn.moko365.com:8080/start", ['echo-protocol']);
     ws.onopen = function()
     {
	$(this).append("<h2>Done</h2>");
     };

     ws.onclose = function()
     { 
        // websocket is closed.
     };
     ws.onerror = function()
     { 
        $(this).html("<h1>error</h1>");
     };
  }
  else
  {
     // The browser doesn't support WebSocket
     alert("WebSocket NOT supported by your Browser!");
  }
};

})($);
