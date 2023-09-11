import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser'
import homeController from './controllers/homeController.js'
import userController from './controllers/userController.js'
import apiController from './controllers/api/apiController.js'
import cookieParser from 'cookie-parser'


const app = express();

// app.use(bodyParser({}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', homeController.homePage);

app.get('/products', homeController.productList);

app.get('/create-product', homeController.createProduct);

app.post('/create-product', homeController.storeProduct);

app.post('/delete-product', homeController.deleteProduct);

app.get('/edit-product/:id', homeController.editProduct);



app.post('/update-product', homeController.updateProduct);

app.get('/products/:id', homeController.showProduct);

app.get('/users', userController.showUsers);

app.get('/api/products', apiController.getProductListApi);


app.get('/signup', homeController.signup);
app.post('/signup', homeController.postSignup);

app.get('/login', homeController.login);
app.post('/postLogin', homeController.postLogin);









app.listen(8000);

// GET, POST, PUT, DELETE