let express = require('express');
let app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.get('/api/whoami', function(req, res, next){
    console.log(req.headers)
    var software = req.headers['user-agent']
    var lang = req.headers['accept-language']
    var ip = req.ip

    res.json({ ipaddress: ip, language: lang, software: software })
})

// listening for requests
const listener = app.listen(3000, function() {
    console.log('Your app is listening on port: ', + listener.address().port)
})

