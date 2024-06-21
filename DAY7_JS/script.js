// console.log("Start");
// function abc(x){
//     console.log(x);
//     temp(x/2);
// }
// abc(16);
// console.log("mid");
// function temp(x){
//     console.log(x/2);
// }
// console.log("End");


// //start
// //Inside XYZ
// //End
// //144

// const button =document.getElementsByTagName('button')[0]; 
// button.addEventListener('click', cb);

// function cb(){
//     console.log('Button clicked');
// }

// const input = document.getElementsByTagName('input')[0];
// input.addEventListener('keyup', cb);

// function cb(e){
//     console.log(`Input is ${e.target.value}`);
// }


// const delay=1000;

// const cb=()=>{
//     console.log('CB called');
// }
// setTimeout(cb, delay);

// const delay=1000;


// setTimeout(()=>{
//     console.log('CB called');
//     setTimeout(()=>{
//         console.log('Internal CB called');
//     },10000)
// }
//     ,10000);
//     console.log('End');


// console.log('start');

// setTimeout(()=>{
//     console.log('A');
//     function abc(){
//         console.log('B');
//         function klm(){
//             setTimeout(()=>{
//                 console.log('C');
//             },1000);
//         }
//         setTimeout(klm(),0);
//     }
//     abc();
    
// },0);

// console.log('end');


// const pr = fetch('https://api.github.com/users/Chandansingh02082002');
// console.log(pr);

// const cb1 = (e) =>{
//     console.log('+fetch', e);
//     e.json();
// }
// const cb2 = (e) =>{
//     console.log('-fetch', e);
//     // e.json();
// }
// pr.then(cb1).catch(cb2)
// const pr = fetch('https://api.github.com/users/Chandansingh02082002');
// pr.then((res)=>{
// const pr2=res.json();

// pr2.then((data)=>{
//     console.log(data);
// });
// }).catch((e)=>{
// console.log('Fetch -', e);
// })\

const root = document.getElementById('root');
const req = fetch('https://dummyjson.com/products');
req.then((res)=>{
   const convertData = res.json();
   convertData.then(renderUI);
}).catch((error)=>{
alert(error);
});


const renderUI= (data)=>{
    // console.log('**',data);
    const products = data.products;
    for(let i=0;i<products.length;i++){
        // root.append(`${products[i].title}\n`)

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML=`
      <h3>${products[i].title}</h3>
      <p>${products[i].price}</p>
      <img src="${products[i].thumbnail}"/>`;
      root.appendChild(card);
    }
   const search = document.getElementsByTagName('input');
   if(search.innerHTML!=`${products[i].title}`){
    
   }
    // console.log(products);
}