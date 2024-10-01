// Basic usage of map() by
// creating an arrow function

let data = [{name: "User01", sub:"JS", age:"21" },{name: "User02", sub:"Python", age:"22" }]

let newData = data.map(x=>x.name+" "+x.age);

console.log(newData);
