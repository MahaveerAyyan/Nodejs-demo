const fs = require('fs');
var first = fs.readFileSync('./ContentFolder/TextFolder/First.txt','utf-8');
var Third = fs.writeFileSync('./ContentFolder/TextFolder/Third.txt',"HelloWorld",{flag:'a'});
var second = fs.writeFileSync('./ContentFolder/TextFolder/Second.txt',"Mahaveer i am in the Second File appended",{flag:"a"});
console.log(first);
console.log(second)