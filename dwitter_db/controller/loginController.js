// import loginRepository from '../repository/loginRepository.js'

export async function login(req, res){
  const {id, pass} = req.body;
  console.log(`id ---> ${id}`);
  console.log(`pass ---> ${pass}`);
}