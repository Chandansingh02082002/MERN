const http = require("http");
const fsPromises = require("fs/promises");
const Port = 2000;
const url = require("url");
const fs = require("fs");
const dataText = fs.readFileSync('./data.json');
const data = JSON.parse(dataText);
const app = http.createServer(async (req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html",

    });
    const {query, pathname} = url.parse(req.url,true);
    switch(pathname){
        case "/":{
            const bf  = await fsPromises.readFile("./pages/homepage.html");
            res.end(bf);
            break;
        }
        case "/view":{
            const bf  = await fsPromises.readFile(`${_dirname}/pages/view.html`);
            let text = bf.toString();
            const product = data.find((ele)=>{
                if(ele.id==query.id){
                    return true;
                }
                else{
                    return false;
                }
            });
            let pr=`
                <div class ="product-card">
                 <h3>${product.title}</h3>
                    <img src="${product.thumbnail}" alt='product-image' height='200'></img>
                    <p>${product.description}</p>
                </div>`
            text=text.replace("@view@", pr);
            res.end(text);
            break;
        }
        case "/products":{
            const bf  = await fsPromises.readFile("./pages/products.html");
            let text = bf.toString();
            let productText = "";
            for(let i=0;i<data.length;i++){
                productText+= `<div class="product-card">
                    <h3>${data[i].title}</h3>
                    <img src="${data[i].thumbnail}" alt='product-image' height='200'></img>
                    <p>${data[i].description}</p>
                    <a href="/view?id=${data[i].id}" target="_blank">More</a>
                </div>`;
            }
            text = text.replace("$TITLE$", productText);

            res.end(text);
            break;

        }
        default:{
            res.end("<h2>Oops! Page not found....</h2>");
            break;
        }
    }
});

app.listen(Port, ()=>{
    console.log(`Server is running on http://localhost:${Port}/`)
})