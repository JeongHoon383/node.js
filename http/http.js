const http = require("http");
const fs = require("fs");

//서버 생성 : createServer()
console.log("server start~");
const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  //console.log(req.url);

  const url = req.url;
  console.log(`url ---> ${url}`);
  //응답생성 - url의 path별로 응답 처리 / join   / login
  res.setHeader("Content-Type", "text/html");
  if (url === `/`) {
    fs.createReadStream('./html/index.html').pipe(res);
    //res.end();
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
    //res.end();
  } else {
    fs.createReadStream('./html/error.html').pipe(res);
    //res.end();
  }
});

server.listen(8080); //http://localhost:8080 --> 현재 생성한 서버의 주소
