import * as repository from '../repository/yes24Repository.js'

export async function getListPage(req, res){
  const rows = await repository.getListPage('MBS')
  res.json(rows);
}