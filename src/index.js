import dotenv from "dotenv"

import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


const app = express()

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
}) 
.catch((err) => {
    console.log("MONGO DB connection failed !!!", err)
})



/*
( async() => {
    try{
        //Database connection
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch(error){
        console.log("Error: ", error);
        throw err
    }
})()
*/