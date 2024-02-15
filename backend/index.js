import express from 'express'
import { MONGODBURI, PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/bookRoute.js";
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/books',router)

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
