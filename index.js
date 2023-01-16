const express = require("express");
const { connection } = require("./conflict/db");
require("dotenv").config();
const { userRouter } = require("./router/userrouter");
const { postRouter } = require("./router/postrouter");
const cors=require("cors")

const { authorize } = require("./middlewares/authorized");

const app = express();
app.use(cors({
    origin:"*"
  }))
app.use(express.json());

app.use("/", userRouter);
app.use(authorize);
app.use("/", postRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error);
    console.log("something! wrong");
  }
  console.log("server is running in 8080");
});
