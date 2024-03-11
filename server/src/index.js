import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from './routes/Users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://vvarunprashanth:varunvenkat20012005@cluster0.sgura73.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0");
console.log("db Connected");
app.listen(2001,()=> console.log("server started"));
