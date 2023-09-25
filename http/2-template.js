const http = require('http');
const fs = require('fs');
const ejs = require('ejs')

const name = 'Hong';
let courses = [
  { name : 'HTML'}, 
  { name : 'Node.js'}, 
  { name : 'CSS'}, 
  { name : 'JavaScript'} 
]

let scoreList = [
  { name : 'HTML' , grade : 'A'},
  { name : 'Node.js' , grade : 'A'},
  { name : 'CSS' , grade : 'A'},
  { name : 'JavaScript' , grade : 'A'}
]

//서버 생성 : 3000
console.log('-- sever start --');
const sever = http.createServer((req, res)=>{
console.log('incoming...');

  // 1. 클라이언트 요청 URL 받아옴
  const url = req.url;

  // 2. 클라이언트 전송타입
  res.setHeader('content-Type', 'text/html') //HTML

  // 2. 패스 체크 : / --> index.ejs
  if(url === '/'){
  // 3. ejs.renderFile(매개변수) <= 프로미스 타입 처리
  ejs.renderFile('./template/index.ejs', {name}) //새로운 HTML이 저장되어있음, 다시 가져와야됨
  .then((data) => {
    console.log(data);
    res.end(data)})
  .catch(console.error)

  }else if(url === '/courses'){
    ejs.renderFile('./template/courses.ejs', {courses})
    .then((data)=>{response.end(data)})
    .catch(console.error)
  }else{
    ejs.renderFile('./template/error.ejs', {error})
    .then((data)=>{response.end(data)})
    .catch(console.error)
  }

})

sever.listen(3000);