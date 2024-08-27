// async function square (req, res)  {
//     let num = parseInt(req.params.num);
//     let square = num*num;
//     res.send(`Your square is: ${square}`);
// }

// async function random (req, res)  {
//     let random = Math.floor(Math.random() * 100);
//     res.send(`Random Number: ${random}`);
// }




async function register(req,res){

    res.send(`Your message sent!`)
    console.log(req)
   
}

module.exports ={
    // square,
    // random,
    register
}