import * as repository from '../repository/yes24Repository.jks';

export async function getListPage(req, res){
  const rows = await repository.getListPage('HPBS');
  res.json(rows);
}