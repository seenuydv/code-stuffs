let express = require("express");

let app = express();
var bodyParser = require('body-parser')
let routes = require('./routes/route')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",routes)



app.listen(8000, ()=>{
    console.log("server started")
})
