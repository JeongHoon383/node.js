//주소록 배열 객체 생성
//POST 방식으로 이름, 주소를 입력받아 address에 추가
//GET 방식으로 주소록(address) 확인

//postman을 이용해서 테스트 진행해주세요.

// 1. 주소록 생성
// 2. 서버 생성
// 3. 9000 포트로 리스닝

const http = require('http');

let address = [];

const sever = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/address'){
    if(method === 'GET'){
      if(address.length != 0){
        res
        .writeHead(200, {
          'Content-Type' : 'application/json'
        })
        .end(JSON.stringify(address));
      }else{
        res
        .end('--No data--')
      }

    }else if(method === 'post'){
      const body = [];
      req
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const jsonStr = JSON.parse(bodyStr);
        address.push(jsonStr)
        res.writeHead(201).end();
      })
    }else{
      res
      .end('page not found---')
    }
  }//url if
})//createServer

sever.listen(9000);