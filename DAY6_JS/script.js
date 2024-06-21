//const title = document.querySelector('h4');
// title.style.color='brown';

// title.className="c1";

//title.setAttribute('class', 'cs2');  // (key, value) pair is like this in set attribute function;
//title.setAttribute('name','chandan');//if it is not present in html then nothing will be changed

// const pr=document.createElement("p");

// const sec = document.getElementsByTagName('section')[0];

// // sec.appendChild(pr);// last mai jaega iss se
// sec.prepend(pr); // front mai add hoga iss se
// pr.innerHTML = 'New line from DOM';


// function printHello(){
//     console.log('Hello.....');
// }
// function inputClicked(e){
//     console.log('input clicked');
//     console.log(e.target.value);
// }
// function inputKeydown(e){
//     console.log('input keydown');
//     console.log(e.target.value);
// }
// function inputChanged(e){
//     console.log('input changed',e);
// }


// function handleUsername(e){
//     console.log("NAME: ", e.target.value);
// }
// function handleUserAge(e){
//     console.log("AGE: ", e.target.value);
//     if(e.target.value>=18){
//         console.log("you are an adult");
//     }
//     else{
//         console.log("you are a minor");
//     }
// }
// function handleSubmit(e){
//     e.preventDefault();
//  //   console.dir(e.target);
//  const userName = e.target[0].value;
//  const userAge = e.target[1].value;

//  console.log(userName,userAge);

//  if(userAge>18){
//     console.log('Allowed');
//  }
//  else{
//     console.log('not Allowed');
//  }
// }

// const handleSubmit = (e)=>{
//     e.preventDefault();// to avoid page refresh
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;
//     const form = document.getElementsByTagName("form")[0];
//     form.style.display="none";
//     renderCard(name, email);
// }

// const renderCard=(n,e)=>{
//  const root = document.getElementById("root");
//  root.setAttribute('class', 'card');

//  root.innerHTML = `
//  <h3 class= 'name'>Name is : ${n}</h3>
//  <h4 class= 'email'> Email is : ${e}</h4>
//  `;
// }






// const showResult=(res)=>{
//     console.log(res);
//     const root=document.getElementById('root');
//     root.innerHTML=res;
// }
// const sum = (a,b)=>{
//     const res = a+b;
//     showResult(res);
//     // console.log(res);
// }
// const Mul = (a,b)=>{
//     const res = a*b;
//     showResult(res);

//     // console.log(res);
// }
// const sub = (a,b)=>{
//     const res = a-b;
//     showResult(res);

//     // console.log(res);
// }
// const divide = (a,b)=>{
//     const res = a/b;
//     showResult(res);

//     // console.log(res);
// }

// const showResult = (res) => {
//     console.log(res);
//     const root = document.getElementById('root');
//     root.innerHTML = res;
// }
// const printPreety = (res) => {
//     const root = document.getElementById('root');
//     root.style.color = 'blue';
//     root.innerText = res;
// }
// const sum = (a, b, fn) => {
//     const res = a + b;
//     fn(res);
// }

// const rr = sum(10, 20, printPreety);

//if a function accepts another function as a parameter and returns a function is function callback

// function paywithRazorpay(){
//     console.log('Payment processing with Razor pay.......');
// }

// function paywithPayTM(){
//     console.log('Payment processing with PayTM.......');
// }

// const userDetails = (name,age,seat,processPayment)=>{
//     console.log(
//         `Booking for ${name} whose age is ${age}`
//     );

//     if(true){
//         processPayment();
//     }
//     else{
//         console.log('Payment failed');
//     }
// }
// userDetails('Chandan', 23,'SL',paywithPayTM);

// const arr = [10,20,30];

// console.log(arr);
// arr.shift();
// console.log(arr);

// arr.unshift("12");
// console.log(arr);

// arr.push("14");
// console.log(arr);

// arr.pop();
// console.log(arr);

// const arr = ['Fruits', 'Apple', 'Mango'];

// // const printValues = (a,b,c)=>{
// //     console.log('value is : ',a);
// //     console.log('index is : ',b);
// //    // console.log('array is : ',c);
// //     console.log('..............');
// // }

// // // for(let i=0;i<arr.length;i++){
// // //     printValues(arr[i],i,arr);
// // // }
// // arr.forEach(printValues);


//  const arr = [24,32,41,63];

// // let sum =0 ;
// // arr.forEach((b)=>{
// //     sum +=b;
// // });
// // console.log(sum);
// const isEven = (x)=>{
//     if(x%2 == 0) return true;
//      else return false;
//     // return true;
// }
// const res = arr.filter(isEven);
// console.log("arr", arr);
// console.log("res", res);

const words=['happy', 'square', 'confidence', 'mystery', 'scale','joyous'];

const len = (x)=>{
    if(x.length>5){
        return false;
    }
    else{
        return true;
    }
}

const res = words.filter(len);
console.log(res);