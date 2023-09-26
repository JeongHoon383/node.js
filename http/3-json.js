const http = require("http");

let courses = [
  { name: "HTML" },
  { name: "JavaScript" },
  { name: "CSS" },
  { name: "Express" },
];

const sever = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/courses") {
    if(method === 'GET'){
      const strCourses = JSON.stringify(courses)
      res
      .writeHead(200,{
        'Content-Length' : Buffer.byteLength(strCourses), 
        'Content-Type' : 'application/json'
      })
      .end(strCourses)
    

  }else if(method === 'POST'){
    //post 방식으로 요청이 오면 --> JSON 데이터 받기
    const body = [];
    req.on('data', (chunk)=>{
      console.log(chunk.toString());
      body.push(chunk);
    });
    
    req.on('end', () => {
      //body의 데이터를 string 타입으로 변경 --> string 문자열을 JSON 객체로 파싱 --> course 추가 --> 결과 완료 전송
      const bodyStr = Buffer.concat(body).toString();
      const newCourse = JSON.parse(bodyStr) // json 객체로 다시 만들어주기
      courses.push(newCourse);
      console.log(courses);

      res.writeHead(201);
      res.end();
    });



  }
  } else {
    res.write('page not Found');
    res.end();
  }
});

sever.listen(3000);
