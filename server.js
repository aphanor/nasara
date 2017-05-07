var fs = require('fs');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.set('port', 3000);
app.use(express.static(__dirname + '/src/'));

app.post('/inscription', function(req, res) {
    var fname = req.body.fname,
        lname = req.body.lname,
        cours = req.body.cour,
        email = req.body.email;
        
    var logStream = fs.createWriteStream('src/log.txt', {'flags': 'a'});
    
    logStream.write('\nEmail : ' + email);
    logStream.write('\nNom : ' + fname + ' ' + lname);
    logStream.write('\nCours : ' + cours);
    logStream.write('\n ');
    logStream.end('\n  ');
    res.status(200).send('Successfully done!');
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port')  ) ;
});