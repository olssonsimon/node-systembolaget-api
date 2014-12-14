var assert = require('chai').assert;
var keys   = require('./keys.json');
var SB     = require('.././lib/sb.js');
var sb     = SB.client(keys.mashape_key);

describe('systembolaget api', function() {

  describe('get countries', function() {
    it('gets all countries', function(done) {

      sb.get('country', function(err, res) {
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get tags', function() {
    it('gets all tags', function(done) {

      sb.get('tag', function(err, res) {
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get a product', function() {
    it('gets the products matching the query', function(done) {
      params = {
        alcohol_from: 0.4,
        price_to:     750,
        year_from:    2005
      };
      
      sb.get('product', params, function(err, res) {
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

});