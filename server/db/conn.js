const mongoose = require("mongoose");

const DB = "mongodb+srv://Kalyanifurniture:Titlik@KalyaniFurnitureDB.d9hxoxp.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})