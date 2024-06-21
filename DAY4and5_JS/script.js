// console.log('working......');

// var age = 18;
// console.log(age);

// age = 19;
// console.log(age);

// let username = "Ajay";
// let username2='Devansh';
// let n = 18;

// console.log(n + ' ' + username2 );

// let r = 10+12+14+" hello";
// console.log(r);
// console.log(typeof(r));
DAY - 5
// let v1 = '10';
// let v2 = 10;

// if(v1==v2){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

// if(v1===v2){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

// let u1 = 'Ajay';
// let u2 = 'Devansh';

// let ans1 = u1 + ' ' +u2;
// let ans2 = `${u1} ${u2}`;

// console.log(ans1);
// console.log(ans2);


// function printHello()
// {
//     console.log('Hello World');
// }
// printHello();

// const pH =function printHi(x){
//     console.log('Hi',x);
// }

// pH('Ajay');

// const pHi = (x)=>{
//     console.log('Hi',x);
// }

// pHi('Ajay');
// calculateSum(7,8);
// mul(7,8);
// function calculateSum (a,b){
//     const ans = a+b;
//     console.log(ans);
// }

// let mul= (a,b)=>{
//     const ans = a*b;
//     console.log(ans);
// }
// function sum(a,b){
//    if(a==undefined && b==undefined){
//     console.log(0);
//    }
//    else if(a!=undefined && b==undefined ){
//     console.log(a);
//    }
//    else if(b!=undefined && a==undefined ){
//     console.log(b);
//     }
//    else{
//         console.log(a+b);
//     }
// }
// sum();
// sum(10);
// sum(10,20);


// const obj1 = new Object();
// const obj2 = {};

// obj1.name = 'Chandan';
// obj2.name = 'Singh';

// console.log(obj1);
// console.log(obj2);


// const obj={
//     name:'Chandan',
//     "age":23,
//     10:"ten",
//     "city":"Beawar",
// }
// console.log(obj);


// const input = prompt();
// console.log(input);

// const arr = ["user", "two", 100];
// console.log(arr);
//we can not change the value of a constant object but we can change the value of key:value pairs;
// const o1={
//     name:'Aman',
// }
// o1.name="Raj";
//the below code will give this error TypeError: Assignment to constant variable.
// o1 = {
//     name:"Raj",
// }
// console.log(o1);
// let o1={
//     name:'Aman',
// }

// const o2=o1;// here address of o1 and o2 are becoming same i.e they both are pointing to same memory block so any changes made to o2 that will affect the value of o1 too 
//the above condition only applies to non-premptives like object.
// o2.name='Raman';
// o1.name="Raj";
// console.log(o1);
// console.log(o2);


//now in the below condition the string is a premptive data type so they have their separate values the codition mentioned above will not be applied here
// let u1="Akshay";
// let u2=u1;
// u2="Rahul";
// console.log(u1);
// console.log(u2);



// console.log(window);
// console.dir(document);
// const div = document.getElementsByTagName('div');
// div[0].innerText="DOM";
// console.dir(div[0]); 

// const d1 = document.getElementsByClassName('container');
// console.dir(d1);
// div[0].style.color='blue';
// div[0].style.backgroundColor="red";

// const d1 = document.getElementById('c1');
// console.dir(d1);
// d1.style.color='brown';

// const d1 = document.querySelectorAll(
//     'div'
// );
// d1[0].style.color='brown';

// const d1 = document.querySelector(
//     '#c1'
// );
// d1.style.color='brown';