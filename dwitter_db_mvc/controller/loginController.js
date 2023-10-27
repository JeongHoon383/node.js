import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login(req, res){
  const {id, pass} = req.body;
  //폼에서 넘어온 pass --> hash 알고리즘 적용
  //db에 저장된 패스워드 가져오기
  const dpass = await loginRepository.login(id);
  const result = await bcrypt.compare(pass, dpass.pass);

  if(result){
    //로그인  성공 -> session, JWT(JSON Web Token)
    const token = createToken(id);
    res.cookie('x_auth', token, {maxAge:60*60*1000, httpOnly:true})
        .status(200).redirect('/dwitter');
  }else{
    //로그인 실패
  }
}

function createToken(id){
  return jwt.sign(
    {id : id}, 'n7QK=o<C4]88'
  )
}