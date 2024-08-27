let express = require("express");
let router = express.Router();
let {register} = require('../controller/controller');

let app = express();

var bodyParser = require('body-parser')

router.get('/', function (req, res, next) {
    console.log("Router Working");
    res.send("From Backend!");
    res.end();
})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// router.get('/square/:num', square)

// router.get('/random', random)

// router.get('/register', register)

router.post('/register', register)

module.exports = router;