import {getProducts, addOneProduct, deleteOneProduct, getProductById, updateOneProduct} from '../models/product.model.js';
import {userLogin, userSignup} from '../models/user.model.js'
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';

const homePage = (req, res) => {
    res.render('home');
}
const productList = async (req, res) => {

    const cookieEmail = req.cookies.email;
    // console.log('cookieEmail', cookieEmail)
    if(!cookieEmail){
        return res.redirect('/login'); 
    }

   

   const data = await getProducts();
    res.render('products', {name: "Le Van Toan", products: data});

}

const createProduct = async (req, res) => {
    console.log('CREAT GET')
//    const data = await addOneProduct();
//    res.json({message: "success", data: data})

res.render('create_product');


}

const storeProduct= (req, res) => {
    console.log('CREAT POST')
    console.log('DATA', req.body.product_name)
    const productName = req.body.product_name
    const productPrice = req.body.product_price


    addOneProduct(productName, productPrice);

    res.redirect('/products');  

    // res.render('products');
    

}

const deleteProduct = async (req, res) => {
    const id = req.body.productId;
    deleteOneProduct(id)
    res.redirect('/products');
}

const editProduct = async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id)
    console.log(product)
    if(!product){
        res.render('page_not_found');
    }
    // deleteOneProduct(id)

    res.render('edit_product', {product});
}

const updateProduct= async (req, res) => {

    const productId = req.body.id
    const productName = req.body.name
    const productPrice = req.body.price
    await updateOneProduct(productId, productName, productPrice)
    console.log('DATA',productId, productName, productPrice, )



    // addOneProduct(productName, productPrice);

    res.redirect('/products');  

    // res.render('products');
    

}

const showProduct = async (req, res) => {
    const id = req.params.id;
    const product = await getProductById(id)
    console.log(product)
    if(!product){
        res.render('page_not_found');
    }
    // deleteOneProduct(id)

    res.render('show_product', {product});
}

const signup = async (req, res) => {
    // const id = req.params.id;
    // const product = await getProductById(id)
    // console.log(product)
    // if(!product){
    //     res.render('page_not_found');
    // }
    // deleteOneProduct(id)

    res.render('signup');
}

const postSignup = async (req, res) => {
    const {name, username, email, password} = req.body

    // const id = req.params.id;
    // const product = await getProductById(id)
    // console.log(product)
    // if(!product){
    //     res.render('page_not_found');
    // }
    // deleteOneProduct(id)
    // console.log({name, username, email, password})


    // const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

    const salt = await bcrypt.genSaltSync(10);

    const passwordHash = await bcrypt.hashSync(password, salt);
    console.log('passwordHash', passwordHash)

    // const newPassword = password + "ipeohgbaiohgioeg";
    await userSignup({name, username, email, password: passwordHash})

    res.redirect('/login');
}

const login = async (req, res) => {
    // const id = req.params.id;
    // const product = await getProductById(id)
    // console.log(product)
    // if(!product){
    //     res.render('page_not_found');
    // }
    // deleteOneProduct(id)

    res.render('login');
}

const postLogin = async (req, res) => {
    const {email, password} = req.body

    const userExist = await userLogin(email)

    if(!userExist){
        return res.render('login', {errorMessage: "User not exit"});

    } 

    const compareResult = bcrypt.compareSync(password, userExist.password); // true

    if(!compareResult){
        return res.render('login', {errorMessage: "Email or Password Incorrect !"});
    }

    console.log('cookie', req.cookies)

    res.cookie('email', email, { maxAge: 900000, httpOnly: true })



    return res.redirect('/');
}

export default {
    homePage,
    productList,
    createProduct,
    storeProduct,
    deleteProduct,
    editProduct,
    updateProduct,
    showProduct,
    signup,
    postSignup,
    login,
    postLogin
}