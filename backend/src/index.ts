import express, {type Express} from "express";
import { config } from "dotenv";
import cors from "cors"
import { connectDb } from "./utils/db";
import routes from "./routes/index";
import { errorHandler } from "./middlewares/error.middlwares";
import {swaggerDocs} from "./utils/swagger";
import logger from "./utils/logger"

config({})

const app: Express = express()


const port = Number(process.env.PORT) || 8000

//common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cors({
  origin: process.env.CORS_URI || "*",
  credentials:true
}))



//ROUTES
app.use("/api", routes)

connectDb().then(()=>{
    app.listen(port, ()=>{
        logger.info("App is running at " + process.env.HOST_URI)
        swaggerDocs(app)
    })
})
.catch((error)=>{
    console.log("MongoDB connection error!!", error)
})

app.use(errorHandler);