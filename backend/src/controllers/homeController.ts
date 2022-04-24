import { Request, Response } from 'express';
import StoreProducts from '../models/StoreProducts';

import { Product } from '../models/Product';

export const home =async (req: Request, res: Response)=>{
   let products = await StoreProducts.find({});
   console.log("Produtos: ", StoreProducts);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};