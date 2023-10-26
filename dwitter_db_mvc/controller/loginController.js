import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcryptjs';

export async function login(req, res){
  const {id, pass} = req.body;
  //폼에서 넘어온 pass --> hash 알고리즘 적용
  //db에 저장된 패스워드 가져오기
  const dpass = await loginRepository.login(id);
  console.log(dpass);
  const result = await bcrypt.compare(pass, dpass.pass);
  console.log(result);
}

