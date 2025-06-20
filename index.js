//configu load karane k liye
require('dotenv').config();
const express =require('express');
const app= express();
const PORT=process.env.PORT || 4000

//middle ware,kbhi bhi json body pass karni pd jaye to isse kr skte hai
app.use(express.json());

//sare routes import karwana hai
const blog =require("./routes/blog")
//mount
app.use('/api/v1/',blog)

//connect with database
const dbConnect=require('./config/db')
dbConnect();

//add default route
app.get('/',(req,res)=>{
  res.send(`<h1>This is my home page</h1>`)
})

//activate port
app.listen(PORT,()=>{
console.log(`Server is running on PORT ${PORT}`
)})