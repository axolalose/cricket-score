let express = require("express");
let app = express();
const body = require("body-parser");
const cricketScore = require("./cricket-score");
const exphbs  = require('express-handlebars');

const crick = cricketScore();

    

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('index', {
        bets: crick.gettingScores(),


    });

       //res.re("/");
});

app.use(body.json());

app.post('/addingScore', function(req, res){
    crick.gettingScores(req.body.scoreType);

        res.redirect("/");
});



// app.get('/actions', function (){



// });



// app.get('/action: addingScore', function(req, res){

// });



let PORT = process.env.PORT || 4001;

app.listen(PORT, function() {
  console.log("App starting on port", PORT);
});
