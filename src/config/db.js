const {mongoose} = require("mongoose")

mongoose.connect("mongodb+srv://sharma123:7247505$Oo@cluster0.e5cjqtn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Mongodb connectd"))
.catch(e=>console.log("error ",e))



module.exports ={mongoose}
