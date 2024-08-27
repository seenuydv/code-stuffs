const ps = require("prompt-sync");

const prompt = ps();

let month = prompt("Enter Month: ");

if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December"){
  console.log("No of days: 31");
}
else if(month == "April" || month == "June" || month == "September" || month == "November"){

  console.log("No of days: 30");
}
else if(month == "February") {
  console.log("No of days: 28 or 29");
}
