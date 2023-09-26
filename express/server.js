//서버 만들기
const express = require('express')
const server = express()

server.listen(1234, function(){
  console.log('1234서버 출력되나요');
})

server.get('/asd', function(req, res){
  res.send('응답이 되네요')
})























/* const express = require('express')
const app = express();

app.listen(8080, function(){
  console.log('hello World');
})

app.get('/beauty', function(req, res){
  res.send('뷰티 용품 판매점 입니다. 반가워요')
}); */