const ps = require("prompt-sync");

const prompt = ps();

let lines = prompt("Enter the Number of Lines: ");


for(i=0;i<parseInt(lines);i++){
    let p = "";
    for(j=0;j<i;j++){
        p += "*";
    }
    console.log(p);
}
