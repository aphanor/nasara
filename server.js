require('dotenv').config()
const fs = require('fs'),
    express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path');

app.use(bodyParser.json());
app.set('port', 3000);
app.use(express.static(__dirname + '/dist/'));


app.post('/write', function(req, res) {
    var fname = req.body.firstname,
        lname = req.body.lastname,
        cours = req.body.course,
        email = req.body.email;
        
    var logStream = fs.createWriteStream(process.env.EXP_FILE, {'flags': 'a'});
    
    logStream.write('\nEmail : ' + email);
    logStream.write('\nNom : ' + fname + ' ' + lname);
    logStream.write('\nCours : ' + cours);
    logStream.write('\n ');
    logStream.end('\n  ');
    res.status(200).send(JSON.stringify({'success':'Successfully done!'}));
});

app.all('*', (req, res) => {
    console.log(`[TRACE] Page refreshed: ${req.originalUrl}`);
    res.status(200).sendFile(path.join(__dirname + '/dist/', '/index.html'));
});

var server = http.createServer(app);
server.listen(process.env.PORT || app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port')  ) ;
});