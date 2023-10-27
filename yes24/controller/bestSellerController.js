import * as bestSellerRepository from "../repository/bestSellerRepository.js"
import ejs from 'ejs'

export async function getAll(req, res){
  const rows = await bestSellerRepository.getAll();
  ejs.renderFile("./template/list.ejs", {list : rows}).then((data) => {
    console.log(data);
    res.end(data)
  })
}

/* create */
export async function create(req, res) {
  const {}
}

/* getBestSeller */
export async function getBestSeller(req, res){
  const 
}

/* update */
export async function update(req, res){

}

/* remove */
export async function remove(req, res){
  
}
