let express =require('express');
let router = express.Router();
let {test,getContact} = require("../cobtrollers/controller")


router.get("/firstpage/:id", test);

router.get("/contact",getContact);

router.post("/test",(req,res)=>{
    console.log(req.body,"<=====")
    res.send("hello post")
})

router.post("/test2",(req,res)=>{
    console.log(req.body,"<=====")
    res.send("hello guys")
})

module.exports = router;