import * as signUpRepository from '../repository/signUpRepository.js'
import bcrypt from 'bcryptjs'

export async function signUp(req, res){
  const {id, pass, name, content} = req.body; // 4개를 repository를 넘기는 작업이 필요함 but, 너무 많음 how? 배열 사용
  const hashPass = bcrypt.hashSync(pass, 10); // sort는 보통 8~10 정도로 설정 why? 너무 길면 CPU 처리하는데 시간이 오래걸림
  const params = [id, hashPass, name, content];
  const result = await signUpRepository.signUp(params);
  if(result === 'ok'){
    res.redirect('/dwitter')
  }
}

