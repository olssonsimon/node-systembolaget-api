var unirest = require('unirest');
var qs      = require('querystring');

var Systembolaget = function(mashape_key) {

  var sb = {

    _request: function(method, path, callback) {
      url     = "https://karlroos-systemet.p.mashape.com/" + path;
      headers = {
        'Accept':         'application/json',
        'Content-Type':   'application/x-www-form-urlencoded',
        'Content-Length': '0',
        'X-Mashape-Key':  mashape_key
      };

      req = unirest(method, url, headers);
      this._response(req, callback);
    },

    _response: function(req, callback) {
      req.end(function (res) {
        // Error
        if (res.statusCode >= 300) 
          return callback(res.statusCode, null);
        
        // Success
        results = {results: res.body, count: res.body.length};
        callback(null, results);
      });
    }

  };

  this.get = function(resource, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params   = null;
    }

    path = resource;
    if (params)
      path += "?" + qs.stringify(params);
    
    sb._request('GET', path, callback);
  }
};

module.exports.client = function(mashape_key) {
  return new Systembolaget(mashape_key);
};