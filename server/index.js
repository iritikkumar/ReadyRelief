const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute= require("./routes/auth")

mongoose.set('strictQuery', true);
dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
    dbName: "ReadyRelief",
}).then(()=> { console.log("DB Connection Successfull!")})
    .catch((err)=> {
        console.log(err);
}); 

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
});


app.use(express.json());
app.use("/api/auth/", authRoute);


app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`);
})