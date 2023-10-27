import * as dwitterRepository from "../repository/dwitterRepository.js";
import ejs from "ejs";
import jwt from 'jsonwebtoken';

/** getAll  **/
export async function getAll(req, res) {
  const rows = await dwitterRepository.getAll();
  ejs.renderFile("./template/index.ejs", { list: rows }).then((data) => {
    console.log(data);
    res.end(data);
  });
}

/** create */
export async function create(req, res) {
  const { id, name, content } = req.body;
  const result = await dwitterRepository.create(id, name, content);
  if (result === "success") res.redirect("/dwitter");
}

/** getDwitter */
export async function getDwitter(req, res) {
  const id = req.params.id;
  const rows = await dwitterRepository.getDwitter(id);
  ejs
    .renderFile("./template/index.ejs", { list: rows })
    .then((data) => res.end(data));
}

/** update */
export async function update(req, res) {
  //로그인한 회원이 쓴 dwitter 게시글만 업데이트 가능하도록 체크
  // 1. 토큰 가져오기
  const token = req.cookies.x_auth;
  try{
    const verify = jwt.verify(token, 'n7QK=o<C4]88');
    const { id, content } = req.body;
    
    if(id === verify.id){
      const result = await dwitterRepository.update(id, content);
    if (result === "success") res.status(204).send("update success!!");
    }else{
      res.status(400).send("update fail!!");
    }

  }catch(error){
    console.log(error);
  }
}


/** remove */
export async function remove(req, res) {
  const { id } = req.body;
  const result = await dwitterRepository.remove(id);
  if (result === "success") res.status(204).send("delete success!");
}
