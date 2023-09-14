const fs = require("fs");

// 비동기 방식
fs.readFile('./park.txt', 'utf8',function(err, data){
    console.log(data);
    if(err !== undefined){
    console.log(err);
    } else {
        console.log(data);
    }
});