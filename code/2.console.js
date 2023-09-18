console.log('logging...');

//log level
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

console.clear();

console.assert(2 === 2, '동일함'); //조건식이 true이면 출력 x
console.assert(2 === 3, '동일하지 않음') //false인 경우만 출력됨

//print object
const student = {name:'홍길동', age:20, color:{default:'blue'}}
console.log(student);
console.table(student)
console.dir(student, {showHidden:true, color:false, depth:0});

//time
console.time('for loop');
for(let i = 0;i < 10;i++){
  i++;
}
console.timeEnd('for loop');

function f1(){
  f2();
}
function f2(){
  f3();
}
function f3(){
  console.log('function 3!!');
  console.trace();
}

f1();
