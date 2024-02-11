import express from 'express'
import { MONGODBURI, PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/bookRoute.js";

const app = express()
app.use(express.json())

app.use('/books',router)

mongoose.connect(MONGODBURI)
.then(()=>{
    console.log(`mongodb connected sucessfully `);
    app.listen(PORT,()=>{
        console.log(`app.listen on port ${PORT}`);
    })

})
.catch((error)=>{
    console.log(error);
})
