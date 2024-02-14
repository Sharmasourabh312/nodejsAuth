const express =require("express")
const registerRoute = express()
const {adminRegisterController}=require("../../controllers/admin/register")
registerRoute.post("/register",adminRegisterController)

module.exports = {registerRoute}  // {"app":app}