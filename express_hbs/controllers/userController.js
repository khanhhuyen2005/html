const showUsers = async (req, res) => {

   

    // const data = await getProducts();
     res.render('users/show_users', {name: "Le Van Toan"});
 
 }

 export default {
    showUsers
 }