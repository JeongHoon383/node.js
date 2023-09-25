const http = require('http');
const fs = require('fs');
const url = require('url');

console.log('sever start~');
const server = http.createServer((req, res)=>{
  console.log('incoming...');

  const url = req.url;
console.log(`url ---> ${url}`);

  res.setHeader('Content-Type', 'text/html');
  if(url === `/`){
    fs.createReadStream('./html/main.html').pipe(res);
  }else if(url === '/course'){
    fs.createReadStream('./html/course.html').pipe(res)
  }else if(url === '/login'){
    fs.createReadStream('./html/login.html').pipe(res)
  }else{
    fs.createReadStream('./html/error.html').pipe(res)
  }
});

server.listen(9000);

