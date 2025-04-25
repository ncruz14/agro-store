import Product from '../models/Product.js';
export const list   = (_,res)=> Product.find().then(r=>res.json(r));
export const create = (req,res)=> Product.create(req.body).then(r=>res.json(r));
export const update = (req,res)=> Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(r=>res.json(r));
export const remove = (req,res)=> Product.findByIdAndDelete(req.params.id).then(r=>res.json(r));
