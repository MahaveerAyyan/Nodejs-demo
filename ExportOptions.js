const text1 = "Text1";
const text2 = "Text2";
module.exports={text1,text2};

module.exports.age = 6;

const person = {
    name:"bob",
}
module.exports.singleperson = person;

module.exports.array = ["John snow a targaryen","i am bran"];

const function1 = function(name){
    console.log(name);
}

module.exports.sampleFunction = function1;

console.log(module.exports);






