


async function test(req,res){
    console.log(req.params,"<==========")
    let id = req.params.id;
   res.status(200).json({
    
   })
}

async function getContact(req,res){
    console.log(req.query.id,"<======")
    res.send("hello in contact page ")
}


module.exports={
    test,
    getContact
}