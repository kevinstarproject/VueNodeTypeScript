var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://database:27017/shorten_urls";


function convertSeqToHash(seq){
	let url = "";
	for(i = 0;i<seq.length;i++){
		url = url + String.fromCharCode(parseInt(seq.charAt(i))+65);
	
	}
	return "https://pbid.io/"+url.toLowerCase();

}

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  db.close();
});

router.post('/insert', function(req, res, next) {
	MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("shorten_urls");

	  dbo.collection("urls").find({originalUrl:req.body.url}).toArray(function(err, result) {
				    if (err) throw err;
				    const dateTime = new Date().getTime();
				    const timestamp = Math.floor(dateTime / 1000);
				    if(result.length>0){
				    	res.send(result[0]);
				    	db.close();
				    }else{

				    	 var item = { createdAt:timestamp, originalUrl: req.body.url, shortenUrl:convertSeqToHash(timestamp.toString().slice(-8))  };
						  dbo.collection("urls").insertOne(item, function(err, result) {
						    if (err) throw err;
						    db.close();
						    res.send(item);
						  });
				    }

				
	  });

	 
	});
	
;
});
router.get('/list', function(req, res, next) {
	MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("shorten_urls");
  		var createdAtSort = { createdAt: -1 };
  		dbo.collection("urls").find().sort(createdAtSort).toArray(function(err, result) {
    			if (err) throw err;
    			res.send(result);
    			db.close();
 		 });
	});
});

module.exports = router;
