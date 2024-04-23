const express = require("express");
const app = express();
// other modeule
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// mymade
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute =require("./routes/posts");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection Succesfull");
  }
);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
    res.send("welcome to home page now sleep")
})

app.get("/users",(req,res)=>{
    res.send("welcome to users page")
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute);

app.listen(8800, () => {
  console.log("Backend Server is running");
});

