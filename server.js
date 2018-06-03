var express =  require('express');
var bodyParser = require('body-parser');
var app = express();



app.get('/', function(req,res){
    res.set({
        'Access-Control-Allow-Origin' :'http://localhost:3000'
    });
    res.write("Working fine");
})


var getid = ( id ) => {
				
				if(id == '1'){
					var id1_json = {
						"id":"1",
						"name" : "Excrush",
						"status" : "Live"						
					}
					return id1_json;					
				}else if(id == '2'){
					var id2_json = {
						"id":"2",
						"name" : "Website2",
						"status" : "Live"						
					}
					return id2_json;				
				}else if(id == '3'){
					var id3_json = {
						"id":"3",
						"name" : "website3",
						"status" : "Live"						
					}
					return id3_json;				
				}else{
					var id_json = {
						"id":id,
						"name" : "unknown",
						"status" : "unknown"						
					}
					return id_json;				
				}				
				
                
}

app.get('/status', function(req,res){
    var id = req.query.id; 
	var val = getid(id);
	return res.json(val);
})

app.post('/status', function(req,res){
    var id = req.body.id; 
	var name = req.body.name; 
	var status = req.body.status; 
	var val = {
		"id" : id,
		"name" : name,
		"status" : status
	}
	return res.json(val);
})

app.listen(3000,function(){
	console.log("App listening at 3000");
});
