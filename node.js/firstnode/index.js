let express = require("express");
let router = require('./routes/routes');

app = express()

app.listen(5000, () => {
    console.log("Server Started!");
})

app.use("/", router);