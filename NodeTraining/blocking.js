var fs = require("fs");
var contents = fs.readFileSync('users.json').toString();
console.log(contents);