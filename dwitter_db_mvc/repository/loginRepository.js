import {db} from '../db/database.js';

export async function login(id){
  return db
  .execute('select pass from dwitter where id=?', [id]) //db로 넘어가는 파라미터
  .then((result) => result[0][0]); //
}



