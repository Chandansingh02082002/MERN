const http = require('http');
const PORT = 3000;
const fsPromises = require("fs/promises");
const app = http.createServer(async (req, res)=>{
    // console.log(Objects.keys(req));
    //console.log(req.url);
    res.writeHead(201, {'Content-Type':'text/html'});
    const route = req.url;
    switch(route){
        case '/home':
            const stream = await fsPromises.readFile('./pages/homepage.html');
            res.end(stream);
            break;
        default :
            res.end('404 Not Found!');
            break;
    }
});
app.listen(PORT, ()=>{

    console.log(`app is running on port ${PORT}`);
});