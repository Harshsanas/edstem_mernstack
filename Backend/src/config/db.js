require("dotenv").config();

const mongoose=require("mongoose")

const password=process.env.PASSWORD

const connect=()=>{
    return mongoose.connect(
    `mongodb+srv://dbEdstemDatabase:${password}@cluster0.yjwmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
    }
    )
}

module.exports=connect;