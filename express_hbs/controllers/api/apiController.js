import {getProducts, addOneProduct, deleteOneProduct, getProductById, updateOneProduct} from '../../models/product.model.js';

const getProductListApi = async (req, res) => {

   

    const data = await getProducts();
    return res.json({message: "Product List", data})
 
 }
 

 export default {
    getProductListApi
 }