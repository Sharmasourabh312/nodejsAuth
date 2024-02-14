const express = require("express")
const app = express()
const env = require("dotenv")
const {registerRoute} = require("./routers/admin/adminRoutes")

env.config();
app.use(express.json());
app.use("/api",registerRoute);




const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
 console.log("Server is running at port number : "+PORT);
})