import {db} from '../db/database.js'; // sql로 db를 넘기는 작업 

export async function signUp(params){
  return db
  .execute('insert into dwitter(id, pass, name, date, content) values(?, ?, ?, curdate(), ?)', params)
  .then((result) => 'ok');
}