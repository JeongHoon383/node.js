import ejs from 'ejs';
// import * as list from '../router/data.js';
import * as repository from '../repository/yes24Repository.js';

export async function getList(req, res) {
  ejs
  .renderFile('./template/list.ejs', {})
  .then((data) => res.end(data));
}

export async function getListPage(req, res){
  const rows = await repository.getListPage('BS');
  console.log(rows);
  res.json(rows);
}