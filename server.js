var express=require("express")
var app = express();
var bodyParser=require("body-parser");
var errorHandler=require('errorhandler');
var path = require('path');
var cron =require('cron');
var routes=require('./routes');

const dir = path.join(__dirname, 'build');
app.use(bodyParser.json({limit: '500mb'}))
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser({limit: '500mb'}));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

//app.all('/api/*', routes.auth);
app.use('/api/users', routes.users);

app.use(express.static(dir));


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(dir, 'index.html'))
});



app.use(errorHandler);


// BY USING 9014 PORT NUMBER TO GET THE RESULT ON THE BROWSER
var server = app.listen(9014,function()
{
    var host = server.address().address
    var port = server.address().port
    console.log('app running at host', port)
});
