import express from 'express'

const app = express();


// select products.name, users.email from products inner join users on products.user_id = users.id where users.id = 1;

app.post("/products", (req, res) => {
    const products = [{id: 1, name: "products 1"}, {id: 2, name: "Iphone 14pro !!"}]
    res.json({products})
})



app.listen(8000, () => {
    console.log('Server is running on port 8000');
})