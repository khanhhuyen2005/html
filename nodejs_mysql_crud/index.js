const express = require('express'),
   app = express();

const db = require('./db'),
      employeeRoutes = require('./controllers/employee.controller')

app.use('/api/employees', employeeRoutes)

app.use((err,req,res,next) => {
   console.log(err)
   res.staus(err.status || 500).send('Something went wrong!')
})

db.query("select 1 + 2 as 'tong cong'")
   .then((res) => {
       console.log(res);
       app.listen(3000, 
        () => console.log('server started at 3000'))
   }).catch((err) => {
    console.log('SOme thing srong', err)
   })
