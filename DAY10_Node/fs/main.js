// const { isUtf8 } = require("buffer");
// const fs = require("fs");

// console.log("Start");
// const data1 = fs.readFileSync("./text.txt");
// const text1  = data1.toString();
// console.log(text1);
// console.log("mid");

// const data2 = fs.readFileSync('./text.txt', {encoding: "utf8"});
// console.log(data2);
// console.log("end");
// console.log("Start");
// fs.readFile('./text.txt', {encoding: "utf8"}, (err,data)=>{
//     if(err)console.log("Error: ", err);
//     else console.log(data);
// });
// console.log("end");

// const res = fs.writeFileSync('./newFile.txt',"Custom text from NodeJs");
// console.log(res);

// console.log("Start");
// const res = fs.writeFile('./newFile.txt',"Custom text from NodeJs", (err,data)=>{
//     console.log(err, data);
// });
// console.log("end");


const fsPromises=require("fs/promises");
// console.log("Start");
// fsPromises.readFile('./text.txt', {encoding: "utf8" }).then((data)=>{
//    console.log(data);
// }).catch((err)=>{
//     console.log("Error: ", err);
// });
// console.log("end");
// fsPromises.writeFile('./textFileWrite.txt', "Dummy Text\n").then(()=>{
//     console.log("Write Done");
// }).catch((err)=>{
// console.log(err);
// });
// fsPromises.appendFile('./textFileAppend.txt', "Dummy Text\n").then(()=>{
//        console.log("Append Done");
// }).catch((err)=>{
//    console.log(err);
// });
const pr =fsPromises.readFile('./data.json');
const getObjectbyId=(id, arr)=>{
    const res =arr.find((ele)=>{
        if(ele.id===id)return true;
        else return false;
    } );
    return res;
}
pr.then((bf)=>{
const text = bf.toString();
const arr = JSON.parse(text);
// let count=0;
// for(let i=0;i<arr.length;i++){
//    count+=arr[i].Score;
// }
const obj = getObjectbyId(3,arr);
console.log(obj);

}).catch((err)=>{console.log(err);});


