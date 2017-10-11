var system = require('system');
var page = require('webpage').create();
var url = system.args[1];

page.viewportSize = {
  width: 1024,
  height: 768
};

page.onResourceRequested = function(requestData, networkRequest) {
  if (requestData.url.match('fonts.googleapis.com')) {
    networkRequest.abort();
  }
};

page.open(url);