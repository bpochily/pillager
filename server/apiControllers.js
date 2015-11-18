var alchemy = require('./alchemy');
var db = require('./fireBaseAPI');
var auth = require('./auth');
var NUM_KEYWORDS = 4;

module.exports.parseUrl = function(req, res) {
  alchemy.getKeywords(req.body.newUrl, NUM_KEYWORDS, function(results) {
    db.addBookmark(req.user, req.body.newUrl, results);
    res.end(JSON.stringify(results)); 
  });
}

module.exports.getUrls = function(req, res) {
  db.getAllBookmarks(req.user, function (sites) {
    res.end(JSON.stringify(sites));
  });    
}

module.exports.signIn = function(req, res, next) {
  auth.signIn(req, res, next);
}

module.exports.signUp = function(req, res, next) {
  auth.signUp(req, res, next);
}