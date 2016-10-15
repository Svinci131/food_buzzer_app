/* CURRENTLY IN: javascript/main.js */
var http = require("http"); 
var fs = require("fs"); 
var server = http.createServer(); 
var express = require("express");
var pipeline = express();
var secret = require("./secret");
// var bodyParser = require("express");
var PORT = 1337;

server.on("request", pipeline);
//body parser - parses payload from post or put requests and places the workable obj on req.body
// pipeline.use(bodyParser.json())
// pipeline.use(bodyParser.urlencoded())


///middleware-run on every request
pipeline.use(function(req, res, next){
	console.log(req.ip);
	next();
});

pipeline.use(express.static(__dirname +"/public"));

pipeline.get('/', function(req, res) {
	var yelp = require("node-yelp"); 

	var client = yelp.createClient({
	  oauth: {
	    'consumer_key': secret.ConsumerKey, 
		'consumer_secret': secret.ConsumerSecret,
		'token': secret.Token,
		'token_secret': secret.TokenSecret
	  },
	  // Optional settings: 
	  httpClient: {
	    maxSockets: 25  // ~> Default is 10 
	  }
	});
	 
	if (req.query.ll) {
		client.search({
		  term: "food",
		  ll: req.query.ll
		}).then(function (data) {
			console.log("data", data)
		  var businesses = data.businesses;
		  var location = data.region; 
		  res.send(data);
		})
		.catch(err => console.log(err));
	}
	else {
		res.send("rp");
	}

});




server.listen(PORT, function() {
	console.log("listening on port"+PORT);
});

