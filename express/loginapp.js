const express = require('express')
const app = express();
const path = require('path')

//path root 이면 welcome 메시지 출력

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/login',(req, res) => {
  res.sendFile(path.join(__dirname, 'login.html')) // 새로운 경로 만들어줌 
  /* res.sendFile('login.html') --> express 경로 기준으로 찾기 때문에 에러가 나옴 */ 
})

app.get('/error',(req, res) => {
  res.sendFile(path.join(__dirname, 'error.html')) 
})

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post('/login', (req, res) => {
  const {id, pass} = req.body;
  /* const id = req.body.id
  const pass = req.body.pass  코드 간략화*/
  if(id === 'test' && pass === '1234'){
    res.redirect('/')
  }else{
    //res.sendFile(path.join(__dirname, 'loginFail.html'))
    res.sendFile(path.join(__dirname, 'loginFail.html'))
  }
});

app.listen(8080, (req, res) => {
  console.log('welcome');
});
